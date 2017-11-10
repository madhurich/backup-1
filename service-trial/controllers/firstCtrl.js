angular.module('controllers.firstCtrl', ['services.users'])
.controller('firstCtrl', ['Users', function(Users){
	var fc = this;
	fc.users = Users.all();
	console.log(fc.users);
}]);