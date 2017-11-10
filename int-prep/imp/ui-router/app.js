var app = angular.module('myApp', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
				url: '/home',
				template: '<h1>Home view</h1>'
			})
			.state('about', {
				url: '/about',
				params: {
					ph: null,
					place: null
				},
				template: '<h1>About view</h1>',
				controller: function($stateParams){
					console.log($stateParams);
				},
				resolve: {
					resolveFunc: function(){
						console.log("resolve func");
					}
				},
				onEnter: function(){
					alert('on enter state');
				}
			});
	
}]);

app.run(function(){
	$rootScope.$on('$stateChangeStart', function(event, toState){
		console.log(toState.data);//if we have custom data
	});
});