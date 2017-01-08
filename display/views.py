import time
import datetime
import calendar

from django.shortcuts import render


def main_display(request):
    """Loads the data for the main mirror display"""
    now = datetime.datetime.now()
    calendar_object = calendar.HTMLCalendar()

    current_month = calendar_object.formatmonth(now.year, now.month)#.replace("cellspacing=\"0\"", "cellspacing=\"5\"")
    timestamp = time.strftime("%I:%M:%S")

    context = {
        'time': timestamp,
        'calendar': current_month
    }
    
    return render(request, 'display/main_display.html', context)
