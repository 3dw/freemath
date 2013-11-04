 #!/usr/bin/python
 # -*- coding: utf-8 -*-

#note1: every parse action here should be an idempotent, say f^2 = f;
#註1: 在此的每一個剖析動作都必須是一個idempotent，也就是 f^2 = f，做兩次和做一次一樣;

#note2: left and right should be invariant(fix porint);
#註2: 左和右必須不變;


#Todo: download all src css like j ui-.css to freemath and relink it  (tester,too)   || Done
#Todo: make /main.js a useful js and call it


import os
import re
directory = os.getcwd()

for root,dirs,files in os.walk(directory):
    for file in files:
       	if file.endswith(".htm"):

			f = open(file, 'r+')

			text = f.read()

#			print "Read texting is : ", text
			
			text = text.replace('【', '【<input type = \'text\'>').replace('】', '</input>】') 			# 填空

#			text = text.replace('&#12304;', '【<input type = \'text\'>').replace('&#12305;', '</input>】')	# 填空在字元特殊時

			text = re.sub(r'<title>.*</title>', "<title>"+re.sub('.htm','', f.name)+"</title>", text)	# 抬頭


			text = re.sub(r'</title>[.\s\S]*<style>' , '</title>\n'										# 資源庫(待增)
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/semantic.min.css">\n'
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/jquery-ui.css" />\n\n'
				+'<style>', text)


			text = re.sub(r'<style>[.\s\S]*/\* Font Definitions \*/', '<style>\n body {'				# 樣式
				+'\n\tbackground-color: #D0BAA2;\n}'
				+'\n\nimg {\n\tborder-radius: 10px;\n\tmin-width: 25px;\n\tmin-height: 50px;\n}'
				+'\n\ninput {\n\tline-height: 18px;\n}'
				+'\n\n/* Font Definitions */', text)

			text = re.sub(r'div\.MsoNormal[\s\S]*{margin:0cm;', 'div.MsoNormal\n{margin:1cm;',text, re.DOTALL)	# 樣式_縮排


			text = re.sub(r'</style>[.\s.S]*</head>', '</style>\n\n'									# 歡迎程式(待修!!)
				+'<script>\n\talert("這是一份紙本教材，你正瀏覽相容模式。如欲完整使用請在自由數學freemath列印它的.doc原始檔^_^");\n</script>'
				+'\n\n</head>', text)

			text = re.sub(r'除錯練習時間[.\s\S]*e-mail','', text)
			text = re.sub(r'我寫的單元是[.\s\S]*e-mail','', text)

			final = ''										# 結尾程式(待修!!)
			for friend in files:
				if friend.endswith(".htm"):
					final += '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'

			final += '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemth主頁</button>'

			text = re.sub(r'</div>[.\s\S]*</body>', '</div>'
				+final
				+'</body>' ,text )


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
