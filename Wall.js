function Wall (x,y,health) {
  this.x = x;
  this.y = y;
  this.img=new Image();
  this.img.src='Asteroid.png';
  this.angle = 0;
  this.health = health;
}
Wall.prototype.update = function(){
	this.y++;
	this.angle+=.01;
}
Wall.prototype.draw = function (context) {
	
	context.save();
	context.translate(this.x+128, this.y+128); 
	context.rotate(this.angle);
	context.drawImage(this.img, -128, -128,256,256);
	context.restore();
};