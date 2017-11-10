function school(name, location){
	this.name = name;
	this.location = location;
}
// school.prototype.medium = 'english';
var dps = new school('dps', 'hyd');
console.log(dps);
console.log(dps.name);