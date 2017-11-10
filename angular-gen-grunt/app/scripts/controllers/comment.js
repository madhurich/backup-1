'use strict';
angular.module('angularGenGruntApp')
  .controller('CommentCtrl', CommentCtrl);

  CommentCtrl.$inject = ['$scope', 'suggestions', '$routeParams'];

  function CommentCtrl($scope, suggestions, $routeParams){
      var vm = this;
      vm.comments = suggestions.allSuggestions[$routeParams.id-1];

      vm.addComment = function(){
        vm.comments.comments.push(vm.newComment);
        vm.newComment = "";
      };
  }
