// <script src="../javascripts/jquery-1.10.2.js"></script>
// <script src="../javascripts/jquery-ui.js"></script>
// <script src="../javascripts/underscore-min.js"></script>
// <script src="../javascripts/backbone-min.js"></script>
// <script src="../javascripts/tongwen_core.js"></script>


// Todo::  faster...

$(window).load(function(){
			$(window).scrollTop(0);
});

$(document).ready(function(){

	// backbone //

	var user = '' + new Date();
	var fire = new Firebase('https://bestian-freemath.firebaseio.com/'+document.title+'/' + user);
	var DocView = Backbone.View.extend({ 
		el: $('body'),

		intro: '<p>歡迎使用「數學形成性教材」線上預覽版！！<br/>紙本使用，請下載文件檔再印出 '
			+'<a class = "ui huge purple button"'
				+'href = "https://3dw.github.io/mathprint/'+ document.title +'.doc"'
				+'style = "margin:15px">'+'立即下載'+'</a></p>'
			+'<p>有會的人在旁邊，遇到關卡即時詢問，學習效果更佳</p>',

		events :{
			'change input' : 'showHint',
			'click div#start' : 'showStart',
			'click input#feedback' : 'feedback'
		},

		initialize: function() {
		      _.bindAll(this, 'render', 'showStart', 'showHint', 'showMain', 'feedback');
 	     	  this.count = 0;		    
		      this.render();
	    },

	    render: function() {

			h = $(window).height();
			w = $(window).width();

	    	$("p,div,canvas").hide();
			$("#canvas").attr("height", h).attr("width", w).css("top", 0);
	    	$(".first,.tool").show();
	    	$("p,img,table").draggable().css("cursor", "move");

	     	this.max = $(this.el).find("input").length;

			var re = new RegExp('(代數|未知數|變數|關係|函數|倍數'
				+'|因數|比例|比值|盈餘|大於|小於|等於'
				+'|費用|計算|公分|數量|點|直線|線段|平面|立體'
				+'|外角定理|窮舉|量度|弧|角|直角|鈍角|平角|銳角'
				+'|區間|數線|範圍解|數列|級數'
				+'|直角座標|不等式|等式|加|減'
				+'|乘|圓|有理化|因式分解|有理數|根式|根號'
				+'|二次函數|三角函數|指數|對數|方程式'
				+'|平方|開方|勾股定理|乘法|除法|相似'
				+'|三角|數學|製圖|測量|工程|單位換算'
				+'|分數|通分|約分|擴分|cm|km|mm)','g');

			$("img").attr("alt", "");
			$("p").each(function( index ) {
              $(this).html($(this).html()
                .replace(re, '<a target = "_blank" href="http://zh.wikipedia.org/wiki/$1">$1</a>')
                .replace(/wiki\/製圖/g,'wiki/地圖')
                .replace(/wiki\/約分/g,'wiki/分數#.E7.B4.84.E5.88.86.E3.80.81.E6.93.B4.E5.88.86.E5.8F.8A.E9.80.9A.E5.88.86')
                .replace(/wiki\/通分/g,'wiki/分數#.E7.B4.84.E5.88.86.E3.80.81.E6.93.B4.E5.88.86.E5.8F.8A.E9.80.9A.E5.88.86')
                .replace("&nbsp;</span>","</span>")      
                );
          	});

//          $("a").css("position","relative").css("z-index",9);
//        	$("#canvasContainer").draggable();

	    	$('input').each(function(index) {

	    		var prev = '', next = '';
	    		var elm = this;
	    		while (elm = elm.previousSibling) {
	    			prev = elm.textContent + prev;
	    			if (/[\u4E00-\u9FFF]/.test(elm.textContent)) { break; }
	    		}
	    		elm = this;
	    		while (elm = elm.nextSibling) {
	    			next += elm.textContent;
	    			if (/[\u4E00-\u9FFF]/.test(elm.textContent)) { break; }
	    		}
				
				$(this).data({ key: index, "0-prev": prev, "2-next": next });
			//	console.log(this);
				console.log($(this).data());
			});   // give all input an id

	    	$(this.el).find("input:eq(0)").attr('placeholder', '');
			$(this.el).find("input:gt(0)").attr('placeholder', '');

			var firstWhite = $("*").filter(function(){
					if ($(this).hasClass('button') || $(this).hasClass('tip')) return false;
					return $(this).css('color') == 'rgb(255, 255, 255)';
				}).eq(0)

			var	indexFW = $("*").index(firstWhite);

			$(firstWhite).html('「'+firstWhite.html()+'」我不確定你的答案對不對，請自行檢查');

			$("*:gt("+indexFW+")").filter(function(){
					if ($(this).hasClass('button') || $(this).hasClass('tip')) return false;
					return $(this).css('color') == 'rgb(255, 255, 255)';
				}).append('我不確定你的答案對不對，請自行檢查');



	//		$(this.el).find("input[type='text']").on("click", function () {
  // 				$(this).select();
//			});


	    	$(this.el).prepend(
	/*			'<img id = "map" src="../images/mindmap-all.png" width="453" height="391" border="0" usemap="#Map"/ style="position:fixed;top:15px;right:150px; border-radius: 15px;">'
				+'<map name="Map" id="Map">'
					+'<area shape="rect" coords="17,267,105,195" href="https://freemath.hackpad.com/yFfG4O8gKDa" target="_blank" />'
					+'<area shape="rect" coords="337,227,445,165" href="https://freemath.hackpad.com/TFdJbbioQcN" target="_blank" />'
					+'<area shape="rect" coords="297,267,385,325" href="http://bestian.github.io/freemath/工具軟體" target="_blank" />'
					+'<area shape="rect" coords="219,50,296,102" href="http://zh.wikipedia.org/wiki/数学" target="_blank" />'
					+'<area shape="rect" coords="300,59,389,119" href="https://www.facebook.com/groups/156709241062806/" target="_blank" />'
					+'<area shape="rect" coords="225,131,328,190" href="http://bestian.github.io/freemath/" />'
					+'<area shape="rect" coords="212,201,328,262" href="http://math.alearn.org.tw/" target="_blank" />'
					+'<area shape="rect" coords="182,281,279,339" href="http://bestian.github.io/freemath/學習地圖/" target="_blank" />'
				+'</map>'  */

				'<div id = "intro" class = "item"><h1>'
					+ document.title
				+'</h1>'
	    		+this.intro
//	    		+'<p><button class = "ui small blue button" onclick = "location = \'https://www.facebook.com/groups/156709241062806/\'">'
//	    			+'也可以上臉書「自學數學團」提問</button></p>'
//	    		+'<br /><br />'
		    		+'<div class="ui huge buttons">'
						+' <div id = "start" class="ui huge green button">線上學習'+document.title+'</div>'
						+' <div class="or"></div>'
						+' <button class = "ui small blue button" onclick = "location = \'https://www.facebook.com/groups/156709241062806/\'">'
		    			+'上臉書「自學數學團」提問</button>'
		//				+' <div class="ui button" onclick = "TongWen.trans2Simp(document)">转成简体</div>'
					+'</div>'
//				+'<button class = "ui  button" </button>'
				+'</div>'
				+'<br /><br />');

//	    	$(this.el).append('<br />'
//	    					+'<textarea id = "feedBackWords" class = "ui input" rows = "10" cols = "60" placeholder = "心得回饋與錯誤回報"></textarea>'
//	    					+'<input id = "feedback" class = "ui big green button" type = "submit"></input>');
				
			$(this.el).find("input[type='text']").css("font-size", "2ex");
			$(this.el).find("textarea").css("font-size", "2ex");


//	    	$("button").show();
	    },

	    feedback: function (){
	    	var words = $("#feedBackWords").val();
	    	console.log("Feedback:"+words);
 		    fire.child("Feedback").set(words);

	    	var fire1 = new Firebase('https://bestian-freemath.firebaseio.com/feedback/' + document.title);
	    	var user = '' + new Date();
	    	
 		    fire1.child(user).set(words);

 		    $("#feedBackWords").val('');
 		    alert("謝謝您的回報："+words+"！");

	    },

	    showStart: function (){
	    	
	    	this.showMain(0);

			$("span").filter(function(){
//				console.log($(this).css('color'));
				return $(this).css('color') == 'rgb(255, 255, 255)';
			}).hide();

	    	$("#intro").slideUp(1000).removeClass("item", 1000);
	    	setTimeout('$("#intro").html("")', 1000) ;

			$("html, body").animate({ scrollTop: $(window).scrollTop() + 1000 }, 1000);

			$("canvas").show();

    	//	$(this.el).prepend('<div id="bar" class = "fixed" style ="z-index:2;width:40%">'
    	//		+'</div>');

    	//	$("#bar").progressbar({ max: this.max ,
    	//						 value: this.count });

    		$("#map").css("right",'0px').css("bottom", '0px').css('top','').css('left','')
    			.css("transform", "scale(0.8,0.8) translate(-20%,20%)")
    			.css("-webkit-transform", "scale(0.8,0.8) translate(-20%,20%)")
    			.css("-moz-transform", "scale(0.8,0.8) translate(-20%,20%)");
	    },

	    showHint: function(e){

	    	console.log($(e.currentTarget).val());

	    	// 提示語
	    	var data = $(e.currentTarget).data();
	    	var key = data.key;

	    	console.log(key);
	    	console.log(data);

	    	delete data.key;
	    	data['1-val'] = $(e.currentTarget).val();


	    	fire.child(key).set(data);

	    	this.showSection(this.count);

//	    	if (this.count > this.max - 2) $("*").show() ;

	    	this.count++;

    		$("#bar").progressbar({ max: this.max ,
    							 value: this.count });

    		if ( this.count < this.max / 3 ) {
	    		$("#bar").progressbar().children('.ui-progressbar-value').css('background','#ccccff');// 弱風格色改這裡
	    	}
	    	if ( this.count > this.max / 3 ) {
	    		$("#bar").progressbar().children('.ui-progressbar-value').css('background','#ffd8af');// 中風格色改這裡
	    	}
	    	if ( this.count > this.max * 2 / 3) {
	    		$("#bar").progressbar().children('.ui-progressbar-value').css('background','#ccffff');// 強風格色改這裡
	    	}


	    },

	    showSection: function(num) {
	    	var indexInput = this.showMain(num);

			var nextSpan = $("*:gt("+indexInput+")").filter(function(){
//				console.log($(this).css('color'));
				return $(this).css('color') == 'rgb(255, 255, 255)';
			}).eq(0);

			$(nextSpan).css('color','green');
//			$(nextSpan).html($(nextSpan).html()+'&nbsp;&nbsp;&nbsp;&nbsp;👀參考看看？');



			$("span").filter(function(){
//				console.log($(this).css('color'));
				return $(this).css('color') == 'rgb(255, 255, 255)';
			}).hide();


		//	$("html, body").animate({ scrollTop: $(window).scrollTop() + 500 }, 1000);



	    },

	    showMain: function(num) {
	    	console.log(num);
	    	//	    	$(this.el).children().hide();
//	    	$(this.el).find("input").hide();
	    	var firstInput = $(this.el).find("input").eq(num);
		   	var indexInput = ($("*").index(firstInput));
		   	console.log("indexInput:"+ indexInput)


			var nextInput = $("*:gt("+indexInput+")").filter("input").eq(0);
			var indexNextInput = ($("*").index(nextInput));
		   	console.log("indexNextInput:"+ indexNextInput);

		   	var nextP_after_nextInput = $("*:gt("+indexNextInput+")").filter("p").eq(0);
		   	var indexNextP_after_nextInput = ($("*").index(nextP_after_nextInput));

//			$("*:gt("+(indexNextP_after_nextInput)+")").hide();
//			$("*:lt("+(indexNextP_after_nextInput+1)+")").show();

			$("*").show();

//			if (indexNextP_after_nextInput == -1) $("*").show();

	    	return indexInput;
	    }
	});

	var fmdoc = new DocView();


});