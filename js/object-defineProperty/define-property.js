function me(){
  var name = null;
  var names = [];
  var c = 0;
  Object.defineProperty(this, 'name', {
    get: function(){
      return name; //here when you are returning directly the value, you wont be able to change the value in future
    },
    set: function(newName){
    	c++;
      name = newName;
      names.push(name);
    }
  });
  //return names;
  this.changedNames = function(){
  	return {'names': names, 'count': c};
  };
}

var madhuri = new me();
console.log(madhuri.name);
madhuri.name = 'some other';
madhuri.name = 'xyz';
console.log(madhuri.name);

console.log(madhuri.changedNames());