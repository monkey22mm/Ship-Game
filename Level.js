function Level () {
  this.x = 0;
  this.y = 0;
}
Level.prototype.update = function(){
	this.y++;
}
Level.prototype.draw = function (context) {
	
};