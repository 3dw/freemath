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
symDir = r'[kejsc?]'

directory = os.getcwd()

units = []
mathmap = ['source,target,value']

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

			text = re.sub(r'<html>','<html ng-app="fmDocApp">', text)

			text = re.sub(r'<head>[.\s\S]*<meta name', "<head>"
				+'\n<meta property="og:type" content="article" />'
				+'\n<meta property="og:url" content="http://bestian.github.io/freemath/weblearn/'+f.name+'" />'
				+'\n<meta property="og:title" content="'+re.sub('.htm','', f.name)+'--自由數學freemath" />'
				+'\n<meta property="og:image" content="http://bestian.github.io/freemath/images/math-logo.png" />'
				+'\n<meta name=Title content="'+re.sub('.htm','', f.name)+'">'
				+'\n<meta name=Keywords content="'+re.sub('.htm','', f.name)+'">'
				+'\n<meta http-equiv=Content-Type content="text/html; charset=utf-8">'
				+"\n<meta name", text)	# open graph

			text = re.sub(r'<title>.*</title>', "<title>"+re.sub('.htm','', f.name)+"</title>", text)	# 抬頭


			text = re.sub(r'</title>[.\s\S]*<style>' , '</title>\n'										# 資源庫(待增)
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/semantic.min.css">\n'
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/jquery-ui.css" />\n'
				+'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/fmDoc.css" />\n'
				+'<script src="../javascripts/jquery-1.10.2.js"></script>\n'
				+'<script src="../javascripts/jquery-ui.js"></script>\n'
				+'<script src="../javascripts/underscore-min.js"></script>\n'
				+'<script src="../javascripts/backbone-min.js"></script>\n'
				+'<script src="../javascripts/angular.min.js"></script>\n'
				+'<script src="../javascripts/tongwen_core.js"></script>\n'
				+'<script src="../javascripts/tongwen_table_pt2s.js"></script>\n'
				+'<script src="../javascripts/tongwen_table_t2s.js"></script>\n'
				+'<script src="fmDoc.js"></script>\n'
				+'<script src="https://cdn.firebase.com/v0/firebase.js"></script>\n'
				+'<style>', text)


			text = re.sub(r'<style>[.\s\S]*/\* Font Definitions \*/', '<style>\n body {'				# 樣式
				+'\n\tbackground-color: rgba(255,255,255,1);\n}'  #D0BAA2
				+'\n\nimg {\n\tborder-radius: 10px;\n\tmin-width: 25px;\n\tmin-height: 50px;\n}'
				+'\n\ninput {\n\tline-height: 18px;\n}'
				+'\n\n/* Font Definitions */', text)


			text = re.sub(r'div\.MsoNormal[\s]*{margin:0cm;', 'div.MsoNormal\n{margin:1cm;',text, re.DOTALL)	# 樣式_縮排

#			text = re.sub(r'</style>[.\s.\S]*</head>', '</style>\n\n\n\n</head>', text)

			text = re.sub(r'<body[.\s\S]*?<div class=WordSection1', 
							'<body lang=ZH-TW style=\'text-justify-trim:punctuation\'>'
							+'\n'
							+'\n<div class = "tool" ng-controller ="Ctrl">'
							+'\n\t<div class = "tool" style = "position:fixed; right: 50px; top: 250px; ">'
							+'\n\t<ul type = "none">'
							+'\n\t\t<li class = "color" ng-repeat = "c in colors" style = "background-color: {{c}}; font-size:2rem;" ng-click="$parent.color = c">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
							+'\n\t</ul>'
							+'\n\t<br/>'
							+'\n\t</div>'
							+'\n\t<span id = "cc" style = "position:fixed; right: 50px; top: 50px; background-color: {{color}};">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>'
							+'\n\t<canvas width="100%" height="10000px" id="canvas" drawing>'
							+'\n\t</canvas>'
							+'\n</div>'
							+'\n<div class=WordSection1', text)


			text = re.sub(r'除錯練習時間[.\s\S]*e-mail','', text)
			text = re.sub(r'我寫的單元是[.\s\S]*e-mail','', text)


			#生出其他單元的按鈕  new 待測試

			grade = re.findall(r'grade:.+', text)

			g = 4
			G = 7
			wikis = re.findall(r'wiki:.+', text)
			wiki = "";

			if len(wikis) > 0:
				wiki = wikis[0].replace('wiki:','').replace(' ','')

			print wiki

			if (len(grade) > 0):
				g = re.findall(r'\d+', grade[0])[0]
				G = re.findall(r'\d+', grade[0])[1]

			print grade
			print g
			print G


			pres = re.findall(r'pre:.+', text)
			afters = re.findall(r'after:.+', text)
			rels = re.findall(r'rel:.+', text)

			buttonList = []
			buttonList2 = []
			leftWall = 	middleWall = middleWall2 = 0

			for friend in files:
				if friend.endswith(".htm"):

					isPre =	False
					isAfter = False
					isRel = False

					if (not friend == f.name):

						for pre in pres:
		#					pre = pre.replace('pre:','').replace(' ','').replace('-->','')
		#					pre = re.sub(symDir, '', pre)
		#					if (friend.replace('.htm','') == pre):
		#						isPre = True
							for seg in pre.split(' '):
		#						print seg
								if seg == friend.replace('.htm',''):
 									isPre = True

		#						if (pre.find(friend.replace('.htm','')) > -1):
		#							isPre = True

						for rel in rels:
		#					rel = rel.replace('rel:','').replace(' ','').replace('-->','')
		#					rel = re.sub(symDir, '', rel)
		#					if (friend.replace('.htm','') == rel):
		#						isRel = True

							for seg in rel.split(' '):
								if seg == friend.replace('.htm',''):
 									isRel = True
		#					if (rel.find(friend.replace('.htm','')) > -1 and not isPre):
		#						isRel = True

						for after in afters:
		#					after = after.replace('after:','').replace(' ','').replace('-->','')
		#					after = re.sub(symDir, '', after)
		#					if (friend.replace('.htm','') == after):
		#						isAfter = True

							for seg in after.split(' '):
								if seg.replace(r'/[jh]/', '') == friend.replace('.htm',''):
 									isAfter = True
		#					if (after.find(friend.replace('.htm','')) > -1 and not isRel and not isPre):
		#						isAfter = True

					if isPre:
						mathmap.append(friend+','+f.name+','+ str(float(g) / 10))
						thisButton = '<button class = "ui big blue button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					thatButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					oldButton = '<button class = "ui big blue button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'<sup class = "tip">先備知識</sup></button>'
						buttonList.insert(0, thisButton)				
						leftWall += 1

					elif isAfter:
						thisButton = '<button class = "ui big green button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					thatButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					oldButton = '<button class = "ui big green button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'<sup class = "tip">後續知識</sup></button>'
						buttonList.insert(leftWall+middleWall+middleWall2, thisButton)

					elif isRel:					
						thisButton = '<button class = "ui big purple button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					thatButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					oldButton = '<button class = "ui big green button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						buttonList.insert(leftWall+middleWall, thisButton)	
						middleWall2 += 1

					elif friend.endswith(f.name):
						thisButton = '<button class = "ui big purple button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					thatButton = thisButton
	#					oldButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
						buttonList.insert(leftWall, thisButton)
						middleWall += 1					 			

					else:
						pass
	#					thisButton = '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'
	#					thatButton = thisButton
	#					oldButton = thisButton
	#					buttonList2.append(thisButton)
#						rightWall += 1

	#				text = text.replace(thisButton, '')
	#				text = text.replace(thatButton, '')
	#				text = text.replace(oldButton, '')

#					final = ''					
					final = ''.join(buttonList) + '<br />' + ''.join(buttonList2);


#					if not friend.endswith(f.name):
#						final += thisButton+'</button>'

# 之後還可以把先備後續存進一個.js中，用來生地圖

#				if friend.endswith(".htm"):
#					finalAll += '<button class = "ui big button" onclick = "location = \''+friend+'\'">'+friend.replace('.htm','')+'</button>'

#			afterOld = '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemth主頁</button>'
#			after = '<br /><button class = "ui big button" onclick = "location = \'http://bestian.github.io/freemath/\'">更多資訊，請至自由數學freemath主頁</button>'

#			text = text.replace(afterOld, '')
#			text = text.replace(after, '')

#			final += after

				# 已解決重覆放final的問題
#			text = text.replace(final, '') 

				#這段改成逐一拿掉button, 來防止新加入成員造成混亂   well-done

#			text = text.replace(finalAll, '')

#			print final

			text = re.sub(r'</div>\s*(<br />)*?\s*(<button[.\s\S]*?</button>)?\s*</body>', '</div>\n'
				+final
				+'</body>' ,text )
#			text = text.replace('</button></button>','</button>')

			ng = open('ngDoc.js', 'r')
			ngDoc = ng.read()
			ng.close()

			text = re.sub(r'</body>[.\s\S]*</html>', '</body>\n'  # 結尾程式
				+'\n'
				+'<script>\n'
				+ngDoc
				+'\n</script>'
				+'\n</html>',text )

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

			units.append('{ n: \'' + f.name +'\', g: ' + str(g) + ',' + 'G: ' + str(G) + ',' + 'wiki: "' + str(wiki) + '"}');



			f.close

dataf = open('fmData.js', 'r+')
dataf.seek(0)
dataf.write('var Units = [' + ', '.join(units) + ']')
dataf.truncate()
dataf.close


dataMap = open('mathmap.csv', 'r+')
dataMap.seek(0)
dataMap.write('\n'.join(mathmap))
dataMap.truncate()
dataMap.close
