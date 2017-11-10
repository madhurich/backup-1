angular.module('myRouter', ['ui.router'])
		.config(configFunc);

configFunc.$inject = ['$urlRouterProvider', '$stateProvider'];
function configFunc($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
			.state('home', {
				params: {
					home: null
				},
				url: '/home',
				templateUrl: 'partials/home/home.html',
				controller: function(resData){
					this.data = resData.data;
				},
				resolve: {
					resData: function(userFac){
						return userFac.getData().then(function(data){
							return data;
						});
					}
				},
				controllerAs: 'vm'
			})
			.state('home.myHome', {
				url: '/myhome',
				params: {
					id: null,
					street: null
				},
				templateUrl: 'partials/home/myHome.html',
				controller: function($scope, $stateParams, myHomeFunc){
					alert('controller');//3
					console.log($stateParams);
					$scope.data = myHomeFunc.data;
				},
				resolve: {
					myHomeFunc: function(userFac){
						alert('resolve');//1
						return userFac.getData().then(function(data){
							return data;
						});
					}
				},
				onEnter: function(){
					alert('onEnter');//2
				},
				onExit: function(){
					alert('onExit');//4
				}
			})
			.state('home.myFriend', {
				url: '/myfriend',
				params: {
					data: null
				},
				templateUrl: 'partials/home/myFriend.html',
				controller: function($stateParams){
					this.data = $stateParams.data;
					console.log($stateParams);
				},
				controllerAs: 'vm'
			})
			.state('about', {
				url: '/about',
				views: {
					'': {
						templateUrl: 'partials/about/about.html'
					},
					'mad@about': {
						templateUrl: 'partials/about/about-mad.html'
					},
					'man@about': {
						templateUrl: 'partials/about/about-man.html'
					}
				}
				
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'partials/contact.html'
			});
}	

angular.module('myRouter')
		.run(function($state){
			//$state.go('home', {home: 'homeVal'});
		});

			