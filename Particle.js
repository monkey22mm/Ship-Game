function Particle (x,y,velx,vely) {
  this.x = x;
  this.y = y; 
  this.startx = x;
  this.starty = y; 
  this.velx = velx;
  this.vely = vely; 
  this.img = new Image();
  this.img.src = "Smoke.png";
  this.a=1.0;
}
Particle.prototype.update = function(){
	this.a-=.03;
	this.x+=this.velx;
	this.y+=this.vely;
}
Particle.prototype.draw = function (context) {
	context.save();
	context.globalAlpha = this.a;
	context.translate(
	this.x-(20+(this.y-this.starty)/20)/2, 
	this.y-(20+(this.y-this.starty)/20)/2);	
	context.drawImage(this.img,-(this.y-this.starty)/2,0,16+(this.y-this.starty),16+(this.y-this.starty));
	context.restore();
};