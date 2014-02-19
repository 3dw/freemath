function makeTimeStamp(){
    var d = new Date();

    var curr_second = d.getSeconds();
    var curr_minute = d.getMinutes();
    var curr_hour = d.getHours();
    (curr_hour > 12) ? curr_hour = ' 下午 ' + (curr_hour - 12) : curr_hour = ' 上午 ' + curr_hour;
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();

    return curr_year +"/" + curr_month + "/" + curr_date + curr_hour + ':' + curr_minute +':'+ curr_second;
}

function newsAuto20(t,name) {
    console.log('newsAuto20');
	var myDataRef = new Firebase('https://shackhand-autolearn.firebaseio.com'); 
	var log = (name || "一位朋友" ) + "使用了"
				+ ( t || document.title ) + "!"
				+ " <a href = '"+location.href.replace('file:///Users/bestian/Documents','http://bestian.github.io')+"'>"
				+ "前往探索"
				+ "</a>";
	var time = makeTimeStamp().split('午')[0]+'午'; 

    chatlog = myDataRef.child('chat').push();
    chatlog.set(
    		{name: '<a href = "http://math.alearn.org.tw">[freemath]</a>',
    		 text: log,
    		 time: time});
    chatNewlog = myDataRef.child('chatNew').child(makeTimeStamp());
    chatNewlog.set(
    		{name: '<a href = "http://math.alearn.org.tw">[freemath]</a>',
    		 text: log,
    		 time: time});
    console.log(log);
}

