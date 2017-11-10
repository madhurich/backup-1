var app = angular.module('myApp');
app.controller('homeCtrl', ['$rootScope', function($rootScope){
	$rootScope.home = 'home here'
}]);