function Star (x,y) {
  this.x = x;
  this.y = y;
  this.img=new Image();
  this.img.src='star.png';
}
Star.prototype.update = function(){
	this.y++;
}
Star.prototype.draw = function (context) {
	//context.fillStyle = "#FFFFCC";
	//context.fillRect(this.x,this.y,8,8);
	context.drawImage(this.img,this.x,this.y,8,8);
};