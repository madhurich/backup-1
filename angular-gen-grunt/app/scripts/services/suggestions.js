(function(){
  'use strict';
  angular.module('angularGenGruntApp')
        .factory('suggestions', suggestionService);

  function suggestionService(){

    var allSuggestions = [
        {
          id: 1,
          name: 'hi',
          comments: ['comment for hi1', 'comment for hi2']
        },
        {
          id: 2,
          name: 'hello',
          comments: ['comment for hello1', 'comment for hello2']
        },
        {
          id: 3,
          name: 'how',
          comments: ['comment for how1', 'comment for how2']
        }
    ];
    return {
      allSuggestions: allSuggestions
    };
  }
})();
