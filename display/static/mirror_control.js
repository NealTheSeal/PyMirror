$(document).ready(function()
{
    setInterval(time.show("#time"), 1000);
	calendar.show("#calendar");
});

$(window).resize(function() {
	// do nothing
});


var time = {

    show: function(target) {

        var that = this;

		var minutes = this.date.getMinutes();	
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}

        $(target).html(this.date.getHours() + ":" + minutes);
		alert("here")
    }
};