angular.module('services.users', []).factory('Users', function(){
	var usersList = [
				{
					id: 1,
					name: 'mad',
					age: 22
				}, {

					id: 2,
					name: 'man',
					age: 24
				}
			];
			
	return{
		all: function(){
			return usersList;
		},
		findById: function(id){
			for(var x in usersList){
				if(usersList[x].id === id){
						return usersList[x];
				}
			}
		}
	};
});