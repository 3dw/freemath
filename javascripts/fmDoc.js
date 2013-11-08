// <script src="../javascripts/jquery-1.10.2.js"></script>
// <script src="../javascripts/jquery-ui.js"></script>
// <script src="../javascripts/underscore-min.js"></script>
// <script src="../javascripts/backbone-min.js"></script>
// <script src="../javascripts/tongwen_core.js"></script>


// Todo::  add auto Facebook Like button from title... 
// Todo::  add php that gater feedback [Star] and [Comment]...

$(document).ready(function(){

	var DocView = Backbone.View.extend({ 
		el: $('body'),

		intro: '歡迎使用「數學形成性教材」線上版！！若要紙本使用，請下載'
			+'<button class = "ui small blue button" onclick = "location = location.href.replace(\'w/\', \'/\').replace(\'.htm\', \'.doc\')"'
				+'style = "margin-left:2ex">'+document.title+'.doc</button>'
			+'<br /><br />本教材的特色在於階梯清楚、講解明確、循序漸近、平易近人，適合自學使用。🚲'
			+'<br /><br />因為這原是紙本教材，有些活動需要紙筆和動手操作。請拿一張紙或筆記本、和一隻筆，當作輔助📝'
			+'<br /><br />如果遇到空格【&nbsp;&nbsp;&nbsp;&nbsp;】，請想想看，填答後再按ENTER鍵'
			+'<br /><br />（愛的小叮嚀：有會的人在旁邊，遇到關卡即時詢問，學習效果更佳）👼',

		events :{
			'change input' : 'showHint',
			'click div#start' : 'showStart'
		},

		initialize: function() {
		      _.bindAll(this, 'render', 'showStart', 'showHint', 'showMain');
 	     	  this.count = 0;
 	     	  this.max = $(this.el).find("input").length
		      this.render();
	    },

	    render: function() {
	    	$("p,div").hide();
	    	$(".first").show();

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



			$(this.el).find("input[type='text']").on("click", function () {
   				$(this).select();
			});


	    	$(this.el).prepend(
				'<div id = "intro" class = "item"><h1>🐳'+document.title+'</h1><p>'
	    		+this.intro+'</p>'
	    		+'<button class = "ui small blue button" onclick = "location = \'https://www.facebook.com/groups/156709241062806/\'">'
	    			+'也可以上臉書「自學數學團」提問👼</button>'
	    		+'<br /><br />'
	    		+'<div class="ui huge buttons">'
				+' <div id = "start" class="ui huge green button">👼線上學習'+document.title+'👼</div>'
				+' <div class="or"></div>'
				+' <div class="ui button" onclick = "TongWen.trans2Simp(document)">转成一份简体教材再开始</div>'
				+'</div>'
//				+'<button class = "ui  button" </button>'
				+'</div><br /><br />');
				

//	    	$("button").show();
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

	    showHint: function(){
	    	// 提示語
   	
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