/*
function checkW(){
	var deviceWidth = document.documentElement.clientWidth>document.documentElement.clientHeight?document.documentElement.clientHeight:document.documentElement.clientWidth;
	if(deviceWidth > 640) deviceWidth = 640;
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
checkW();
*/

function checkW(){
	var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
	if(deviceWidth > 640) deviceWidth = 640;
	document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}
checkW();
window.onresize = function(){
	checkW();
}


