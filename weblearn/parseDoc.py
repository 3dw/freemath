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
        if file.endswith(".htm") and (not (file.endswith("index.htm") or file.endswith("index.html") or re.match("^_", file))):

            print(file)

            if file == "header.htm":
                continue
            
            f = open(file, 'r+')
            text = f.read()
            if (text.find('noParse') > -1) :
                continue

            # 填空
            text = re.sub(r'【([.\s\S]*?)】', '【<input type = \'text\'>'+r'\g<1>'+'</input>】', text) 

            # 二變一
            text = re.sub(r'<input type = \'text\'><input type = \'text\'>([.\s\S]*?)</input></input>',
             '<input type = \'text\'>'+r'\g<1>'+'</input>', text) 

            text = re.sub(r'<html>','<html ng-app="fmDocApp">', text)
            text = re.sub(r'<html ','<html ng-app="fmDocApp" ', text)
            text = re.sub(r'<html.* ng-app="fmDocApp">', '<html ng-app="fmDocApp">', text)
            text = re.sub(r'ng-app=.*"fmDocApp"','ng-app="fmDocApp"', text)

            text = re.sub(r'<head>[.\s\S]*<meta name', "<head>"
                +'\n<meta property="og:type" content="article" />'
                +'\n<meta property="og:url" content="http://bestian.github.io/freemath/weblearn/'+f.name+'" />'
                +'\n<meta property="og:title" content="'+re.sub('.htm','', f.name)+'--自由數學freemath" />'
                +'\n<meta property="og:image" content="http://bestian.github.io/freemath/images/math-logo.png" />'
                +'\n<meta name=Title content="'+re.sub('.htm','', f.name)+'">'
                +'\n<meta name=Keywords content="'+re.sub('.htm','', f.name)+'">'
                +'\n<meta http-equiv=Content-Type content="text/html; charset=utf-8">'
                +"\n<meta name", text)  # open graph

            text = re.sub(r'<title>.*</title>', "<title>"+re.sub('.htm','', f.name)+"</title>", text)   # 抬頭


            text = re.sub(r'</title>[.\s\S]*<style>' , '</title>\n'                                     # 資源庫(待增)
                +'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/semantic.min.css">\n'
                +'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/jquery-ui.css" />\n'
                +'<link rel="stylesheet" type="text/css" class="ui" href="../stylesheets/fmDoc.css" />\n'
                +'<script src="../javascripts/jquery-1.10.2.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/jquery-ui.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/underscore-min.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/backbone-min.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/angular.min.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/tongwen_core.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/tongwen_table_pt2s.js" type="text/javascript"></script>\n'
                +'<script src="../javascripts/tongwen_table_t2s.js" type="text/javascript"></script>\n'
                +'<script src="fmDoc.js" type="text/javascript"></script>\n'
                +'<script src="https://cdn.firebase.com/v0/firebase.js" type="text/javascript"></script>\n'
                +'<script src = "../ga.js" type="text/javascript"></script>\n'
                +'<style>', text)



            text = re.sub(r'<style>[.\s\S]*/\* Font Definitions \*/', '<style>\n body {'                # 樣式
                +'\n\tbackground-color: rgba(255,255,255,1);\n}'  #D0BAA2
                +'\n\nimg {\n\tborder-radius: 10px;\n\tmin-width: 25px;\n\tmin-height: 50px;\n}'
                +'\n\ninput {\n\tline-height: 18px;\n}'
                +'\n\n/* Font Definitions */', text)


            text = re.sub(r'div\.MsoNormal[\s]*{margin:0cm;', 'div.MsoNormal\n{margin:1cm;',text, re.DOTALL)    # 樣式_縮排

            text = re.sub(r'<body[.\s\S]*?<div class=WordSection1', 
                            '<body ng-cloak ="" lang=ZH-TW style=\'text-justify-trim:punctuation\'>'
                            +'\n'
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

    #        print wiki

            if (len(grade) > 0):
                g = re.findall(r'\d+', grade[0])[0]
                G = re.findall(r'\d+', grade[0])[1]

    #        print grade
    #        print g
    #        print G


            pres = re.findall(r'pre:.+', text)
            afters = re.findall(r'after:.+', text)
            rels = re.findall(r'rel:.+', text)

    #           print pres

            buttonList = []
            buttonList2 = []
            leftWall =  middleWall = middleWall2 = 0

            for friend in files:
                if friend.endswith(".htm"):

                    isPre = False
                    isAfter = False
                    isRel = False

                    if (not friend == f.name):

                        for pre in pres:

                            for seg in pre.split(' '):
        #                       print seg
                                if seg == friend.replace('.htm',''):
                                    isPre = True


                        for rel in rels:


                            for seg in rel.split(' '):
                                if seg == friend.replace('.htm',''):
                                    isRel = True


                        for after in afters:


                            for seg in after.split(' '):
                                if seg.replace(r'/[jh]/', '') == friend.replace('.htm',''):
                                    isAfter = True


                    if isPre:
                        mathmap.append(friend+','+f.name+','+ str(float(g) / 10))
 

                    elif isAfter:
                        pass
        
                    elif isRel:
                        mathmap.append(friend+','+f.name+','+ str(float(g) / 10))                   
 

                    elif friend.endswith(f.name):
                        pass                           

                    else:
                        pass

                    final = '<iframe src = "../學習地圖/indexD3.html#' + f.name.replace('.htm','')+'!2' + '" width = "600" height = "600"></iframe>'


            text = re.sub(r'</div>\s*(<br />)*\s*(<button[.\s\S]*?</button>)?\s*(<br />)*\s*</body>', '</div>\n'
                +final
                +'</body>' ,text )
            text = re.sub(r'</div>\s*(<br />)*\s*(<iframe[.\s\S]*?</iframe>)?\s*(<br />)*\s*</body>', '</div>\n'
                +final
                +'</body>' ,text )

#    先備 : 藍    後續: 綠

            #特殊cases
            text = re.sub(r"</span></span><span style='font-size:14.0pt;font-family:\s*新細明體;color:white'>", '', text)

            f.seek(0)
            f.write(text)
            f.truncate()

            units.append('{ n: \'' + f.name +'\', g: ' + str(g) + ',' + 'G: ' + str(G) + ',' + 'wiki: "' + str(wiki) + '"}');


            f.close


dataf = open('fmData.js', 'r+')
dataf.seek(0)
dataf.write('var Units = [' + ', '.join(units) + ']')
dataf.truncate()
dataf.close



dataMapPart = open('../學習地圖/mathmap_part.csv', 'r')
part = dataMapPart.read().split('\n')
part.pop(0)
dataMapPart.close()

dataMap = open('../學習地圖/mathmap.csv', 'r+')
dataMap.seek(0)
dataMap.write('\n'.join(mathmap + part))
dataMap.truncate()
dataMap.close
