var utils = {};
var click = false;
utils.captureMouse = function(element){
	var mouse = {x: 0, y: 0};
	
	element.addEventListener('mousemove', function(event){
		var x,y;
		if(event.pageX|| event.pageY){
			x = event.pageX;
			y = event.pageY;
		}else{
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;
		
		mouse.x = x;
		mouse.y = y;
	}, false);
	return mouse;
};

utils.captureTouch = function(element){
	var touch = {x: null, y: null, isPressed: false};
	element.addEventListener('touchstart', function(event){
		touch.isPressed = true;
	}, false);
	element.addEventListener('touchend', function(event){
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
	}, false);
	element.addEventListener('touchmove', function(event){
		var x,y,
		touch_event = event.touches[0];
		
		if(touch_event.pageX|| touch_event.pageY){
			x = touch_event.pageX;
			y = touch_event.pageY;
		}else{
			x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= offsetLeft;
		y -= offsetTop;
		
		touch.x = x;
		touch.y = y;
	}, false);
	return touch;
};
utils.intersectsPoint = function (x1,y1,w1,h1,x2,y2,w2,h2){
	if (x1 < x2 + w2  && x1 + w1  > x2 &&
		y1 < y2 + h2 && y1 + h1 > y2) {
			return true;
	}
	return false;
};