var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider
		.when('/', {
			template: '<h1>Home view</h1>',
			controller: 'homeCtrl'
		})
		.when('/about', {
			template: '<h1>About view</h1>',
			controller: 'aboutCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);