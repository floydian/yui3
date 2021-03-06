YUI.add('lang/datatype-date-format_en', function(Y) {

Y.Intl.add(
'datatype-date-format',
'en',
{
"a":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
,"A":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
,"b":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
,"B":["January","February","March","April","May","June","July","August","September","October","November","December"]
,"c":"%a, %b %d, %Y %l:%M:%S %p %Z"
,"p":["AM","PM"]
,"P":["am","pm"]
,"r":"%I:%M:%S %p"
,"x":"%m/%d/%y"
,"X":"%l:%M:%S %p"
}

);

}, '@VERSION@' );


YUI.add('lang/datatype-date_en', function(Y){}, '@VERSION@' , {use:['lang/datatype-date-format_en']});

