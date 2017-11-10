angular.module('components.user', ['services.users'])
	.controller('usersController', ['Users', function(Users){
		var usersCtrl = this;
		usersCtrl.users = Users.all();
		console.log(usersCtrl.users);
	}])
	.config(function($stateProvider){
		$stateProvider.state('users', {
			url: '/users',
			controller: 'usersController as uc',
			templateUrl: 'components/users/users.html'
		});
	});