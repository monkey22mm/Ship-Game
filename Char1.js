function Char1 (x, y) {
  this.x = x;
  this.y = y;
  this.img=new Image();
  this.img.src='hero.png';
  this.flame=new Image();
  this.flame.src='Flame.png';
  this.currFrame = 64;
  this.speed = 3.2;  
  this.left = false;
  this.right = false; 
  this.up = false; 
  this.down = false;
  this.health = 100;
  this.width=128;
  this.switch1=0;
  this.currFlame = 0;
}
Char1.prototype.update = function(){
	this.switch1++;
	if(this.up){
		this.y-=this.speed;
	}else if(this.down){
		this.y+=this.speed;
	}
	if(this.left){
		this.x-=this.speed;
	}else if(this.right){
		this.x+=this.speed;
	}
	if(this.switch1%10==0)
		this.currFlame=14;
	if(this.switch1%10==2)
		this.currFlame=0;
}
Char1.prototype.draw = function (context, lvl) {
	context.drawImage(this.flame,this.currFlame,0,14,9,this.x+48,this.y+96,28,18);
	context.drawImage(this.img,this.currFrame,0,64,64,this.x,this.y,this.width,this.width);
	
	
};