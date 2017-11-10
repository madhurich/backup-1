app.controller('detailCtrl', ['$scope', '$stateParams', 'userService',
	function($scope, $stateParams, userService){
	$scope.user = new userService();
	userService.get({id: $stateParams.id}, function(data){
		$scope.data = data;
	});

	$scope.updateUser = function(){
		$scope.user.$update(function(){
			console.log($scope.user);
		});
	};
}]);