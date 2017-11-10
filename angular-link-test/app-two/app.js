(function(){
    angular.module('myAppTwo', ['ui.router', 'myAppOne']);
    angular.module('myAppTwo')
            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<h2>Home Page</h2>'
            });
    }        
})();