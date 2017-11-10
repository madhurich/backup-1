app.controller('homeCtrl', ['$scope', 'userService', '$state', function($scope, userService, $state){
	userService.query(function(data){
		console.log(data);
		$scope.data = data;
	});

	$scope.deleteUser = function(user){
		var ans = prompt('delete User? yes/No');
		if(ans === 'yes'){
			user.$delete(function(){
				alert('delelted');
			});
		}else{
			$state.go('home');
		}
		
		
	};
}]);