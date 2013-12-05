// <script src="../javascripts/jquery-1.10.2.js"></script>
// <script src="../javascripts/jquery-ui.js"></script>
// <script src="../javascripts/underscore-min.js"></script>
// <script src="../javascripts/backbone-min.js"></script>
// <script src="../javascripts/tongwen_core.js"></script>


// Todo::  add auto Facebook Like button from title... 
// Todo::  add php that gater feedback [Star] and [Comment]...



$(document).ready(function(){

	var user = '' + new Date();
	var fire = new Firebase('https://bestian-freemath.firebaseio.com/'+document.title+'/' + user);
	var DocView = Backbone.View.extend({ 
		el: $('body'),

		intro: '<p>歡迎使用「數學形成性教材」線上版！！若要紙本使用，請下載文件檔'
			+'<a class = "ui small blue button" href = \'https://github.com/bestian/freemath/zipball/gh-pages\'"'
				+'style = "margin-left:2ex">'+'下載整份Freemath文件檔'+'</a></p>'
			+'<p>本教材的特色在於階梯清楚、講解明確、循序漸近、平易近人，適合自學使用。🚲</p>'
			+'<p>有些部份需要紙筆和動手操作。請拿紙筆，當作輔助📝</p>'
			+'<p>如果遇到空格【&nbsp;&nbsp;&nbsp;&nbsp;】，請想想看，填答後再按ENTER鍵</p>'
			+'<p>（有會的人在旁邊，遇到關卡即時詢問，學習效果更佳）👼</p>',

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
	    	$("p,div").hide();
	    	$(".first").show();
	    	$("img").draggable().css("cursor", "move");

	     	this.max = $(this.el).find("input").length

			var re = /(倍數|因數|比例|比值|盈餘|大於|小於|等於|費用|計算|公分|數量|點|直線|線段|平面|立體|外角定理|窮舉|量度|弧|角|區間|數線|範圍解|數列|級數|直角座標|不等式|等式|加|減|乘|圓|有理化|因式分解|有理數|根式|根號|二次函數|三角函數|指數|對數|方程式|平方|開方|勾股定理|乘法|除法|相似|三角|數學|製圖|測量|工程|單位換算|分數|通分|約分|擴分|cm|km|mm)/g;

			$("img").attr("alt", "");
			$("p").each(function( index ) {
              $(this).html($(this).html()
                .replace(re, '<a target = "_blank" href="http://zh.wikipedia.org/wiki/$1">$1</a>')
                .replace(/wiki\/製圖/g,'wiki/地圖')
                .replace(/wiki\/約分/g,'wiki/分數#.E7.B4.84.E5.88.86.E3.80.81.E6.93.B4.E5.88.86.E5.8F.8A.E9.80.9A.E5.88.86')
                .replace(/wiki\/通分/g,'wiki/分數#.E7.B4.84.E5.88.86.E3.80.81.E6.93.B4.E5.88.86.E5.8F.8A.E9.80.9A.E5.88.86')
                );
          	});

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

	    	$(this.el).find("input:eq(0)").attr('placeholder', '請填答再按ENTER👼');
			$(this.el).find("input:gt(0)").attr('placeholder', '請填答👼');

			var firstWhite = $("*").filter(function(){
					if ($(this).hasClass('button') || $(this).hasClass('tip')) return false;
					return $(this).css('color') == 'rgb(255, 255, 255)';
				}).eq(0)

			var	indexFW = $("*").index(firstWhite);

			$(firstWhite).html('「'+firstWhite.html()+'」&nbsp;&nbsp;&nbsp;&nbsp;👀參考而已');

			$("*:gt("+indexFW+")").filter(function(){
					if ($(this).hasClass('button') || $(this).hasClass('tip')) return false;
					return $(this).css('color') == 'rgb(255, 255, 255)';
				}).append('&nbsp;&nbsp;&nbsp;&nbsp;👀');



	//		$(this.el).find("input[type='text']").on("click", function () {
  // 				$(this).select();
//			});




	    	$(this.el).prepend(
				'<div id = "intro" class = "item"><h1>🐳'+document.title+'</h1>'
	    		+this.intro
	    		+'<p><button class = "ui small blue button" onclick = "location = \'https://www.facebook.com/groups/156709241062806/\'">'
	    			+'也可以上臉書「自學數學團」提問👼</button></p>'
	    		+'<br /><br />'
	    		+'<div class="ui huge buttons">'
				+' <div id = "start" class="ui huge green button">👼線上學習'+document.title+'👼</div>'
				+' <div class="or"></div>'
				+' <div class="ui button" onclick = "TongWen.trans2Simp(document)">转成一份简体教材再开始</div>'
				+'</div>'
//				+'<button class = "ui  button" </button>'
				+'</div><br /><br />');

	    	$(this.el).append('<br />'
	    					+'<textarea id = "feedBackWords" class = "ui input" rows = "10" cols = "30" placeholder = "心得回饋與錯誤回報"></textarea>'
	    					+'<input id = "feedback" class = "ui big green button" type = "submit"></input>');
				
			$(this.el).find("input[type='text']").css("font-size", "2ex");
			$(this.el).find("textarea").css("font-size", "2ex");

//	    	$("button").show();
	    },

	    feedback: function (){
	    	var words = $("#feedBackWords").val();
	    	console.log("Feedback:"+words);
 		    fire.child("Feedback").set(words);

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

    		$(this.el).prepend('<div id="bar" class = "fixed top right item" >'
    			+'</div>');

    		$("#bar").progressbar({ max: this.max ,
    							 value: this.count });

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


			$("html, body").animate({ scrollTop: $(window).scrollTop() + 500 }, 1000);



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

			$("*:gt("+(indexNextP_after_nextInput)+")").hide();
			$("*:lt("+(indexNextP_after_nextInput+1)+")").show();

			if (indexNextP_after_nextInput == -1) $("*").show();

	    	return indexInput;
	    }
	});

	var fmdoc = new DocView();


});