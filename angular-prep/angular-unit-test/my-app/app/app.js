angular.module('myApp', ['ui.router', 'components.user', 'services.users'])
.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/');
});