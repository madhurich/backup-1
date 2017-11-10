(function(){
	angular.module('toDoApp', ['ngRoute']);
	angular.module('toDoApp')
			.config(config);

	config.$inject = ['$routeProvider'];
	function config($routeProvider){
		$routeProvider
			.when('/', {
				template: '<div>' + 
								'<label>Enter name</lable><input ng-model="hc.name">' +
								'<label>Enter age</lable><input ng-model="hc.age">' +
								'<label>Editable</lable><input type="boolean" ng-model="hc.edit">' +
								'<button ng-click="hc.addTask(hc.name, hc.age, hc.edit)">Add task</button>' +
								'<table>' + 
									'<tbody ng-repeat="task in hc.data">' +
										'<tr ng-if="!hc.edit">' +											
											'<td>{{task.name}}</td><td>{{task.age}}</td>' +
											'<td><button ng-click="hc.onEdit(task.edit)">Edit</button></td>' + 
											'<td><button ng-click="hc.onDelete(task._id)">delete</button></td>' +																					
										'</tr>' +
										'<tr ng-if="!!task.edit">' +											
											'<td><input ng-model="task.name"></td><td><input ng-model="task.age"></td>' +
											'<td><button>Edit</button></td><td><button>delete</button></td>' +																					
										'</tr>' +
									'</tbody>' +	
								'</table>' + 
						  '</div>',
				controller: 'homeCtrl',
				controllerAs: 'hc'
			})
			.otherwise({
				redirectTo: '/'
			});
	}		
})();