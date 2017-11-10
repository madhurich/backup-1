var obj = {
	name: 'mad',
	age: 23
};

Object.freeze(obj);

Object.defineProperty(obj, 'newProp', {
	value: 'newProp val here'
});

//you wont be able to add new properties and you will get an error saying object cant be extensible