(function(){
  'use strict';
angular
  .module('angularGenGruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(config);
  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/comments/:id', {
        templateUrl: 'views/comments.html',
        controller: 'CommentCtrl',
        controllerAs: 'comment'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
