// import "Plane";

var Airport = function() {
  this._hanger = [];
};

Airport.prototype.land = function(plane) {
  this._hanger.push(plane);
};
// 
// Airport.prototype._hanger = function() {
//
// };
