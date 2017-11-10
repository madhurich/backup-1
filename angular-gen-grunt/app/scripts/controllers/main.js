(function(){
  'use strict';
angular.module('angularGenGruntApp')
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'suggestions'];
  function MainCtrl ($scope, suggestions) {
    var vm = this;
    vm.suggestions = suggestions.allSuggestions;
    vm.id = vm.suggestions.length;

    vm.addSuggestion = function(){
      vm.id++;
      vm.suggestions.push({id: vm.id, name: vm.newSuggestion, comments: []});
      vm.newSuggestion = "";
    };
  }
})();

