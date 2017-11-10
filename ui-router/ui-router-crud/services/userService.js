app.factory('userService', function($resource){
	return $resource('https://jsonplaceholder.typicode.com/posts/:id', {id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	}, {stripTrailingSlashes: false});
});