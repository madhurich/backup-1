var obj = {
	get: function(){
		return 'name here';
	},
	set: function(newName){
		this.otherName = newName;
	}
};

function createObj(){
	Object.defineProperty(this, 'name', obj);
}

var newObj = new createObj();
console.log(newObj.name);
newObj.otherName = 'new name here';
console.log(newObj.otherName);