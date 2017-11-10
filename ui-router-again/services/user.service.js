angular.module('myRouter')
		.factory('userFac', userFac);

userFac.$inject = ['$http'];

function userFac($http){
	var service = {
		getData: getData
	};
	getData();

	return service;
	function getData(){
		return $http.get('https://jsonplaceholder.typicode.com/users');
	}


}		