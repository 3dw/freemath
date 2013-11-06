 #!/usr/bin/python
 # -*- coding: utf-8 -*-

#note1: every parse action here should be an idempotent, say f^2 = f;
#註1: 在此的每一個剖析動作都必須是一個冪等運算(idempotent)，也就是 f^2 = f，做兩次和做一次一樣;

#note2: left and right should be invariant(fix porint);
#註2: 左和右必須不變;


#Todo:   解決重覆放final的問題

import os
import re
directory = os.getcwd()

for root,dirs,files in os.walk(directory):
    for file in files:
       	if file.endswith(".htm") and (not file.endswith("index.htm") or file.endswith("index.html")):

			f = open(file, 'r+')

			text = f.read()

#			print "Read texting is : ", text

			# 填空
			text = re.sub(r'【([.\s\S]*?)】', '【<input type = \'text\'>'+r'\g<1>'+'</input>】', text) 

			# 二變一
			text = re.sub(r'<input type = \'text\'><input type = \'text\'>([.\s\S]*?)</input></input>',
			 '<input type = \'text\'>'+r'\g<1>'+'</input>', text) 


			if (text.find('</title>') == -1) :
				text = re.sub(r'[\s]*<style>', '\n'
				+'<title>AAA</title>\n'
				+'<style>' , text)
				print "i make a title for this page:", f.name


			text = re.sub(r'<title>.*</title>', "<title>"+re.sub('.htm','', f.name)+"</title>", text)	# 抬頭


			text = re.sub(r'</title>[.\s\S]*<style>' , '</title>\n'										# 資源庫(待增)
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/semantic.min.css">\n'
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/jquery-ui.css" />\n'
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/fmDoc.css" />\n'
				+'<script src="../javascripts/jquery-1.10.2.js"></script>\n'
				+'<script src="../javascripts/jquery-ui.js"></script>\n'
				+'<script src="../javascripts/underscore-min.js"></script>\n'
				+'<script src="../javascripts/backbone-min.js"></script>\n'
				+'<script src="../javascripts/fmDoc.js"></script>\n'
				+'<style>', text)


			text = re.sub(r'<style>[.\s\S]*/\* Font Definitions \*/', '<style>\n body {'				# 樣式
				+'\n\tbackground-color: #D0BAA2;\n}'
				+'\n\nimg {\n\tborder-radius: 10px;\n\tmin-width: 25px;\n\tmin-height: 50px;\n}'
				+'\n\ninput {\n\tline-height: 18px;\n}'
				+'\n\n/* Font Definitions */', text)


			text = re.sub(r'div\.MsoNormal[\s]*{margin:0cm;', 'div.MsoNormal\n{margin:1cm;',text, re.DOTALL)	# 樣式_縮排


			text = re.sub(r'</style>[.\s.\S]*</head>', '</style>\n\n'		
#				+'<script>\n\talert("這是一份紙本教材，你正瀏覽相容模式。如欲完整使用請在自由數學freemath列印它的.doc原始檔^_^");\n</script>'
							# 歡迎程式(待修!!)
				+'\n\n</head>', text)

			text = re.sub(r'除錯練習時間[.\s\S]*e-mail','', text)
			text = re.sub(r'我寫的單元是[.\s\S]*e-mail','', text)

			final = ''
#			finalAll = ''

			#生出其他單元的按鈕

			for friend in files:
				if friend.endswith(".htm"):
					thisButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
					text = text.replace(thisButton, '')

					if not friend.endswith(f.name):				
						final += thisButton+'</button>'

#				if friend.endswith(".htm"):
#					finalAll += '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'

			afterOld = '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemth主頁</button>'
			after = '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemath主頁</button>'

			text = text.replace(afterOld, '')
			text = text.replace(after, '')
			final += after


				# 已解決重覆放final的問題
#			text = text.replace(final, '') 

				#這段改成逐一拿掉button, 來防止新加入成員造成混亂   well-done

#			text = text.replace(finalAll, '')

			text = re.sub(r'[\s]*</body>', '\n'
				+final
				+'</body>' ,text )


#			text = re.sub(r'</body>[\s]*</html>', '</body>\n'  # 結尾程式(目前用不到)
#				+'\n'
#				+'<script type="text/javascript">\n'
#				+'</script>'
#				+'</html>',text )

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
