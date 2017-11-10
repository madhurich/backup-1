(function(angular) {
  'use strict';
function HeroDetailController() {
  var ctrl = this;

  ctrl.delete = function() {
    ctrl.onDelete({hero: ctrl.hero});
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
  };
}

angular.module('heroApp').component('heroDetail', {
  template: '<hr>' +
              '<div>' +
                'Name: {{$ctrl.hero.name}}<br>' +
                'Location: <editable-field field-value="$ctrl.hero.location"' +  
                'field-type="text" on-update="$ctrl.update(\'location\', value)">' +
                  
                '</editable-field><br>' + 
                '<button ng-click="$ctrl.delete()">Delete</button>' +
              '</div>',
  controller: HeroDetailController,
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});
})(window.angular);