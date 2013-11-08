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


			if (text.find('</title>') == -1) :
				text = re.sub(r'[\s]*<style>', '\n'
				+'<title>AAA</title>\n'
				+'<style>' , text)
				print "i make a title for this page:", f.name


			text = re.sub(r'<title>.*</title>', "<title>"+re.sub('.htm','', f.name)+"</title>", text)	# 抬頭


			text = re.sub(r'</title>[.\s\S]*<style>' , '</title>\n'
				+'<META HTTP-EQUIV="refresh" CONTENT="0;URL=../weblearn/'+file+'">'
				+'<style>', text)


			text = re.sub(r'<body[.\s\S]*</body>', '<body></body>' ,text )

			f.seek(0)
			f.write(text)
			f.truncate()

			print "I have redirected the file: ", f.name

			f.close
