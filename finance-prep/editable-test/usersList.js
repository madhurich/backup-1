(function(angular){
	angular.module('myApp')
			.component('userList',{
				template: '',
				controller: userListCtrl
			});

	function userListCtrl(){
		var vm = this;
		vm.users = [
			{
				name: 'mad',
				age: 23
			},
			{
				name: 'mad',
				age: 23
			},
		];
	}		
})(window.angular);