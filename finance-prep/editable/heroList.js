(function(angular) {
  'use strict';
function HeroListController($scope, $element, $attrs) {
  var ctrl = this;

  // This would be loaded by $http etc.
  ctrl.list = [
    {
      name: 'Superman',
      location: ''
    },
    {
      name: 'Batman',
      location: 'Wayne Manor'
    }
  ];

  ctrl.updateHero = function(hero, prop, value) {
    hero[prop] = value;
  };

  ctrl.deleteHero = function(hero) {
    var idx = ctrl.list.indexOf(hero);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };
}

angular.module('heroApp').component('heroList', {
  template: '<b>Heroes</b><br>' +
                '<hero-detail ng-repeat="hero in $ctrl.list"' + 
                'hero="hero" on-delete="$ctrl.deleteHero(hero)"' + 
                'on-update="$ctrl.updateHero(hero, prop, value)"></hero-detail>',
  controller: HeroListController
});
})(window.angular);