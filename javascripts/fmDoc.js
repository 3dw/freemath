$(document).ready(function(){

	var DocView = Backbone.View.extend({ 
		el: $('body'),

		intro: '歡迎使用「數學形成性教材」線上版！！若要紙本使用，請下載'
			+'<button class = "ui small button" onclick = "location = location.href.replace(\'w/\', \'/\').replace(\'.htm\', \'.doc\')">'
				+document.title+'.doc</button>'
			+'<br /><br />本教材的特色在於階梯清楚、講解明確、循序漸近、平易近人，適合自學使用。🚲'
			+'<br /><br />使用時，請拿一張紙或筆記本、和一隻筆，當作輔助📝'
			+'<br /><br />（愛的小叮嚀：有會的人在旁邊，遇到關卡可以即時詢問的話，學習效果更佳）👼',

		events :{
			'change input' : 'showHint',
			'click button#start' : 'showStart'
		},

		initialize: function() {
		      _.bindAll(this, 'render', 'showStart', 'showHint', 'showMain');
 	     	  this.count = 0;
		      this.render();
	    },

	    render: function() {
	    	$("p,div").hide();
	    	$(this.el).prepend('<div id = "intro" class = "item"><h1>🐳'+document.title+'</h1><p>'
	    		+this.intro+'</p>'
	    		+'<button class = "ui small button" onclick = "location = \'https://www.facebook.com/groups/156709241062806/\'">'
	    			+'若身邊沒有會的人，也可以上臉書「自學數學團」提問👼</button>'
	    		+'<br />'
	    		+'<button id = "start" class = "ui huge green button">'+'進入學習!!'+'</button>'
				+'</div>' );
//	    	$("button").show();
	    },

	    showStart: function (){
	    	
	    	this.showMain(0);

			$("span").filter(function(){
//				console.log($(this).css('color'));
				return $(this).css('color') == 'rgb(255, 255, 255)';
			}).hide();

			$("html, body").animate({ scrollTop: $(window).scrollTop() + 1000 }, 1000);
	    },

	    showHint: function(){
	    	// 提示語
	    	$("#intro").slideUp(1000).removeClass("item", 1000);
	    	setTimeout('$("#intro").html("")', 1000) ;
   	
	    	this.showSection(this.count);
	    	this.count++;
	    },

	    showSection: function(num) {
	    	var indexInput = this.showMain(num);

			var nextSpan = $("*:gt("+indexInput+")").filter(function(){
//				console.log($(this).css('color'));
				return $(this).css('color') == 'rgb(255, 255, 255)';
			}).eq(0);

			$(nextSpan).css('color','green');
			$(nextSpan).html($(nextSpan).html()+'&nbsp;&nbsp;&nbsp;&nbsp;👀參考看看？');

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
	    	return indexInput;
	    }
	});

	var fmdoc = new DocView();

});