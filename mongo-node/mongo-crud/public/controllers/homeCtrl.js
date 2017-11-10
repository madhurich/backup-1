(function(){
	angular.module('toDoApp')
			.controller('homeCtrl', homeCtrl);
	homeCtrl.$inject = ['$scope', 'tasks'];
	function homeCtrl($scope, tasks){
		var hc = this;
		console.log(tasks.getTasks());
		tasks.getTasks().then(function(res){
			console.log(res);
			hc.data = res.data;
			hc.onEdit = onEdit;
			hc.onDelete = onDelete;
			hc.addTask = addTask;

			function onEdit(edit){
				//alert('on edit');
				edit = true;
			}

			function onDelete(id){
				tasks.deleteTask(id).then(function(){
					tasks.getTasks().then(function(res){
						hc.data = res.data;
					});
				});
			}

			function addTask(name, age, edit){
				var data = {
					"name": hc.name,
					"age": hc.age,
					"edit": hc.edit
				};
				tasks.addTask(data).then(function(){
					tasks.getTasks().then(function(res){
						hc.data = res.data;
					});
				});
			}
		});
	}		
})();