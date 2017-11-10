var app = angular.module('myApp', []);

// app.factory('game', function(){
// 	return {
// 		title: "my title"
// 	};
// });

// app.controller('myCtrl', ['$scope', 'game', function($scope, game){
// 	$scope.title = game.title;
// }]);

// app.config(function($provide){
// 	$provide.factory('game', function(){
// 		return {
// 			title: "my title"
// 		};
// 	});
// });

// app.config(function($provide){
// 	$provide.provide('game', function(){
// 		return {
// 			$get: function(){
// 				return {
// 					title: 'my title'
// 				};
// 			}
// 		};
// 	});
// });

app.provider('game', function(){
	return {
		$get: function(){
			return {
				title: 'my title'
			};
		}
	};
});
