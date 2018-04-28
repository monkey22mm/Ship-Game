function Projectile (x,y) {
  this.x = x;
  this.y = y;
  this.img=new Image();
  this.img.src='Projectile1.png';
  this.speed = 6.4;
}
Projectile.prototype.update = function(){
	this.y-=this.speed;
}
Projectile.prototype.draw = function (context) {
	context.drawImage(this.img, this.x,this.y,16,16);
};