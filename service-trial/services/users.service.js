angular.module('services.users', [])
.factory('Users', function(){
	return {
		all: function(){
			return 'hello hi';
		}
	};
});