(function(){
	//'use strict';
	angular.module('toDoApp')
			.controller('taskCtrl', taskCtrl);

	taskCtrl.$inject = ['$scope'];
	
	function taskCtrl($scope){
		var vm = this;
		vm.tasks = [];
		vm.id = 0;
		vm.addTask = function(){
			vm.id++;
			vm.tasks.push({id: vm.id, name: vm.name, priority: vm.priority});
			vm.name = ""; vm.priority = "";
		};

		vm.removeTask = function(id){
			//alert(id);
			vm.tasks = vm.tasks.filter(function(elem, index){
				if(elem.id != id) return true;
			});
		};

	}		
})();

//i983 --> fill , i20 request form, --> email them 
//i765, i20 (new), photos, 420 doll cheque