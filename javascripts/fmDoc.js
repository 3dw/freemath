$(document).ready(function(){

	var DocView = Backbone.View.extend({ 
		el: $('body'),

		intro: '歡迎使用數學形成性教材線上版。'
			+'<br /><br />這原是紙本教材，由資深自學教師朱佳仁與唐宗浩合作編創。'
			+'<button onclick = "location = location.href.replace(\'w/\', \'/\').replace(\'.htm\', \'.doc\')">'
				+'看紙本</button>'
			+'<br /><br />本教材的特色在於階梯清楚、講解明確、循序漸近、平易近人，適合自學使用。'
			+'<br /><br />請拿一張紙或筆記本、和一隻筆，開始練功吧！'
			+'<br /><br />雖然教材適合自學，最好還是有會的人在旁邊，若卡住就可以即時詢問。',

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
	    	$(this.el).prepend('<div id = "intro" class = "item"><h1>🐳'+document.title+'</h1><p>'+this.intro+'</p><button id = "start" class = "ui big button">'+'進入學習!!'+'</botton></div><br /><br /><br />');
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
			$(nextSpan).html($(nextSpan).html()+'（僅供參考）');

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
		   	console.log("indexNextP:"+ indexNextInput);

			$("*:gt("+(indexNextInput)+")").hide();
			$("*:lt("+(indexNextInput+1)+")").show();
	    	return indexInput;
	    }
	});

	var fmdoc = new DocView();

});