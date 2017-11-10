var app = angular.module('myApp', ['ui.router', 'ngResource']);
app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'homeCtrl'
		})
		.state('detail', {
			url: '/detail/:id',
			templateUrl: 'views/detail.html',
			controller: 'detailCtrl'
		})
		.state('create', {
			url: '/create',
			templateUrl: 'views/createUser.html',
			controller: 'createUserCtrl'
		});
});
