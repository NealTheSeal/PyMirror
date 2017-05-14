// $(document).ready(function()
// {
//     setInterval(time.show("#time"), 1000);
// 	calendar.show("#calendar");
// });

// $(window).resize(function() {
// 	// do nothing
// });


// var time = {

//     show: function(target) {

//         var that = this;

// 		var minutes = this.date.getMinutes();	
// 		if (minutes < 10)
// 		{
// 			minutes = "0" + minutes;
// 		}

//         $(target).html(this.date.getHours() + ":" + minutes);
// 		alert("here")
//     }
// };

// time.show("#time");

function showTime(target) {

	var date = new Date();

	var minutes = date.getMinutes();	
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}

	var time = date.getHours() + ":" + minutes + ":" + date.getSeconds();

	// $(target).html(this.date.getHours() + ":" + minutes);
	document.getElementById("time").innerHTML = time;

	// setInterval(function(){
	// 	showTime("#time")
	// },3000);
}

showTime("#time");

