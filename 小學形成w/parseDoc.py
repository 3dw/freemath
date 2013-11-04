 #!/usr/bin/python
 # -*- coding: utf-8 -*-

#note: every parse action here shold be an idempotent, say f^2 = f;
#註: 在此的每一個剖析動作都必須是一個idempotent，也就是 f^2 = f，做兩次和做一次一樣;


import os
import re
directory = os.getcwd()

for root,dirs,files in os.walk(directory):
    for file in files:
       	if file.endswith(".htm"):

			f = open(file, 'r+')

			text = f.read()

#			print "Read texting is : ", text
			
			text = text.replace('【', '<input type = \'text\'>').replace('】', '</input>')
			text = text.replace('&#12304;', '<input type = \'text\'>').replace('&#12305;', '</input>')

			text = re.sub(r'<title>.*</title>', "<title>"+re.sub('.htm','', f.name)+"</title>", text)
			text = re.sub(r'div\.MsoNormal[\s\S]*{margin:0cm;', 'div.MsoNormal\n{margin:1cm;',text, re.DOTALL)
			text = re.sub(r'<style>[.\s\S]*/\* Font Definitions \*/', '<style>\n body {'
				+'\n\tbackground-color: #D0BAA2;\n}'
				+'\n\nimg {\n\tborder-radius: 10px;\n\tmin-width: 25px;\n\tmin-height: 50px;\n}'
				+'\n\ninput {\n\tline-height: 18px;\n}'
				+'\n\n/* Font Definitions */', text)

			text = re.sub(r'</style>[.\s.S]*</head>', '</style>\n\n'
				+'<script>\n\talert("這是一份紙本教材，你正瀏覽相容模式。如欲完整使用請在自由數學freemath列印它的.doc原始檔^_^");\n</script>'
				+'\n\n</head>', text)

			text = re.sub(r'除錯練習時間[.\s\S]*e-mail','', text)
			text = re.sub(r'我寫的單元是[.\s\S]*e-mail','', text)

			final = ''
			for friend in files:
				if friend.endswith(".htm"):
					final += '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'

			final += '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemth主頁</button>'

			text = re.sub(r'</div>[.\s\S]*</body>', '</div>'
				+final
				+'</body>' ,text )

			text = re.sub(r'</title>[.\s\S]*<style>' , '</title>\n'
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/semantic.min.css">\n'
				+'<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />\n\n'
				+'<style>', text)


#			print "write texting is : ", text

			f.seek(0)
			f.write(text)
			f.truncate()

			print "I have parse the file: ", f.name
			print "and replaced all【__sonthing__】to <input type = 'text'>__something__</input>"
			print "and changed title to: ", f.name
			print "and changed margin to: 1cm"
			print "and set background-color: #D0BAA2"
			print "and add final buttons and link with semantic ui, jquery ui css"			
			print "and 消掉意見回饋欄 and 加上提示語"

			f.close
