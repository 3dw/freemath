 #!/usr/bin/python
 # -*- coding: utf-8 -*-

#note1: every parse action here should be an idempotent, say f^2 = f;
#註1: 在此的每一個剖析動作都必須是一個冪等運算(idempotent)，也就是 f^2 = f，做兩次和做一次一樣;

#note2: left and right should be invariant(fix porint);
#註2: 左和右必須不變;



# Todo::  parse   pre,  after  and lnik to elematary&junoir... 

import os
import re

# docDirs = ["幼兒形成w","小學形成w","國中形成w","高中形成w","大專形成w","其他形成w"]
# symDirs = ["k","e","j","s","c","?"]

directory = os.getcwd()

for root,dirs,files in os.walk(directory):
    for file in files:
       	if file.endswith(".htm") and (not file.endswith("index.htm") or file.endswith("index.html")):

			f = open(file, 'r+')

			text = f.read()

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
				+'<script src="../javascripts/tongwen_core.js"></script>\n'
				+'<script src="../javascripts/tongwen_table_pt2s.js"></script>\n'
				+'<script src="../javascripts/tongwen_table_t2s.js"></script>\n'
				+'<script src="../javascripts/fmDoc.js"></script>\n'
				+'<style>', text)


			text = re.sub(r'<style>[.\s\S]*/\* Font Definitions \*/', '<style>\n body {'				# 樣式
				+'\n\tbackground-color: #D0BAA2;\n}'
				+'\n\nimg {\n\tborder-radius: 10px;\n\tmin-width: 25px;\n\tmin-height: 50px;\n}'
				+'\n\ninput {\n\tline-height: 18px;\n}'
				+'\n\n/* Font Definitions */', text)


			text = re.sub(r'div\.MsoNormal[\s]*{margin:0cm;', 'div.MsoNormal\n{margin:1cm;',text, re.DOTALL)	# 樣式_縮排

#			text = re.sub(r'</style>[.\s.\S]*</head>', '</style>\n\n\n\n</head>', text)

			text = re.sub(r'除錯練習時間[.\s\S]*e-mail','', text)
			text = re.sub(r'我寫的單元是[.\s\S]*e-mail','', text)


			#生出其他單元的按鈕  new 待測試

			pres = re.findall(r'pre:.+', text)
			afters = re.findall(r'after:.+', text)
			rels = re.findall(r'rel:.+', text)

			buttonList = []
			leftWall = 	middleWall = middleWall2 = 0

			for friend in files:
				if friend.endswith(".htm"):

					isPre =	isAfter = isRel = False    # isRel  平行參考  purple ??

					for pre in pres:
#						print pre.replace('pre:','').replace(' ','').replace('-->','')
						if (friend.replace('.htm','') == pre.replace('pre:','').replace(' ','').replace('-->','')):
							isPre = True

					for after in afters:
#						print after.replace('after:','').replace(' ','').replace('-->','')
						if (friend.replace('.htm','') == after.replace('after:','').replace(' ','').replace('-->','')):
							isAfter = True

					for rel in rels:
						print rel.replace('rel:','').replace(' ','').replace('-->','')
						if (friend.replace('.htm','') == rel.replace('rel:','').replace(' ','').replace('-->','')):
							isRel = True		


					if isPre:
						thisButton = '<button class = "ui big blue button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						thatButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						oldButton = '<button class = "ui big blue button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'<sup class = "tip">先備知識</sup></button>'
						buttonList.insert(0, thisButton)				
						leftWall += 1

					elif isAfter:
						thisButton = '<button class = "ui big green button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						thatButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						oldButton = '<button class = "ui big green button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'<sup class = "tip">後續知識</sup></button>'
						buttonList.insert(leftWall+middleWall+middleWall2, thisButton)

					elif isRel:
						thisButton = '<button class = "ui big teal button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						thatButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						oldButton = '<button class = "ui big green button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						buttonList.insert(leftWall+middleWall, thisButton)	
						middleWall2 += 1

					elif friend.endswith(f.name):
						thisButton = '<button class = "ui big purple button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						thatButton = thisButton
						oldButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						buttonList.insert(leftWall, thisButton)
						middleWall += 1					 			

					else:
						thisButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						thatButton = thisButton
						oldButton = thisButton
						buttonList.append(thisButton)
#						rightWall += 1

					text = text.replace(thisButton, '')
					text = text.replace(thatButton, '')
					text = text.replace(oldButton, '')

#					final = ''					
					final = ''.join(buttonList);


#					if not friend.endswith(f.name):
#						final += thisButton+'</button>'

# 之後還可以把先備後續存進一個.js中，用來生地圖

#				if friend.endswith(".htm"):
#					finalAll += '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'

			afterOld = '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemth主頁</button>'
			after = '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemath主頁</button>'

#			text = text.replace(afterOld, '')
#			text = text.replace(after, '')

			final += after

				# 已解決重覆放final的問題
#			text = text.replace(final, '') 

				#這段改成逐一拿掉button, 來防止新加入成員造成混亂   well-done

#			text = text.replace(finalAll, '')

			print final

			text = re.sub(r'</div>\s*(<br />)*?\s*(<button[.\s\S]*?</button>)?\s*</body>', '</div>\n'
				+final
				+'</body>' ,text )
#			text = text.replace('</button></button>','</button>')


#			text = re.sub(r'</body>\s*pre:\s?([kejsc])?(.+)\s*after:\s?([kejsc])?(.+)\s*</html>', '</body>\n'  # 結尾程式(目前用不到)
#				+'\n'
#				+'<script type="text/javascript">\n'
#				+r'\g<1>'	 # k:kindergarden, e:elementary
#				+r'\g<2>'	 # 分數, 分數到小數,因數與倍數      split(r',\s*')
#				+r'\g<3>'	 # j:junior, s:senior   ?: 難以分類
#				+r'\g<2>'    # 一元一次方程式, 二元一次方程式
#				+'</script>'
#				+'</html>',text )

#    先備 : 藍    後續: 綠


			#特殊cases
			text = re.sub(r"</span></span><span style='font-size:14.0pt;font-family:\s*新細明體;color:white'>", '', text)



			f.seek(0)
			f.write(text)
			f.truncate()

			print "I have parsed the file: ", f.name
#			print "and replaced all【__sonthing__】to <input type = 'text'>__something__</input>"
#			print "and changed title to: ", f.name
#			print "and changed margin to: 1cm"
#			print "and set background-color: #D0BAA2"
#			print "and add final buttons and link with semantic ui, jquery ui css"			
#			print "and 消掉意見回饋欄 and 加上提示語"

			f.close
