(function(){
	angular.module('toDoApp')
			.factory('tasks', listTasks);

	listTasks.$inject = ['$http'];
	function listTasks($http){
		var service = {
			getTasks: getTasks,
			deleteTask: deleteTask,
			addTask: addTask
		};
		return service;
		

		function getTasks(){
			return $http.get('/killer')
					.then(getTasksComplete)
					.catch(getTasksFailed);
			function getTasksComplete(res){
				console.log(res);
				return res;
			}		

			function getTasksFailed(err){
				return err;
			}
		}

		function deleteTask(id){
			console.log(id);
			return $http.delete('/killer/' + id);
		}

		function addTask(data){
			return $http.post('/killer/', data);
		}
	}	
})();