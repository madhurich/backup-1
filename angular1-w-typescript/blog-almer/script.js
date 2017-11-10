var SomeComponentController = (function () {
    function SomeComponentController() {
        this.textBindings = '';
        this.dataBindings = 0;
    }
    SomeComponentController.prototype.add = function () {
        this.functionBindings();
    };
    return SomeComponentController;
}());
var SomeComponent = (function () {
    function SomeComponent() {
        this.bindings = {
            textBindings: '@',
            dataBindings: '<',
            functionBindings: '&'
        };
        this.template = "\n\t\t\t<div>text-bindings {{$ctrl.textBindings}}</div>\n\t\t\t<div>{{$ctrl.dataBindings}}</div>\n\t\t\t<button ng-click=\"$ctrl.add()\">click</button>\n\t\t";
        this.controller = SomeComponentController;
    }
    return SomeComponent;
}());
angular.module('myApp', []);
angular.module('myApp')
    .component('someComp', new SomeComponent());
