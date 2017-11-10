var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'homeCtrl',
			templateUrl: 'views/home.html'
		})
		.when('/about', {
			controller: 'aboutCtrl',
			templateUrl: 'views/about.html'
		}).
		when('/contact', {
			controller: 'contactCtrl',
			templateUrl: 'views/contact.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);