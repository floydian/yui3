YUI.add('lang/datatype-date-format', function(Y) {

Y.Intl.add(
'datatype-date-format',
'',
{
	a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	c: "%Y-%m-%dT%H:%M:%S%z",
	p: ["AM", "PM"],
	P: ["am", "pm"],
	r: "%I:%M:%S %p",
	x: "%Y-%m-%d",
	X: "%H:%M:%S"
}

);

}, '@VERSION@' );