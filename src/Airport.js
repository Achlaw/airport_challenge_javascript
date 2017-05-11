function Airport() {
  this.hanger = [];
};

Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
  plane._flying = false;
};

Airport.prototype.takeoff = function(plane) {
  this.hanger.pop(plane);
  plane._flying = true;
}
