app.controller('createUserCtrl', ['$scope', 'userService', '$state', 
	function($scope, userService, $state){
		$scope.user = new userService();
	
	$scope.createUser = function(){
			$scope.user.$save(function(){
				console.log($scope.user);
			//$state.go('home');
		});
	};
	
}]);