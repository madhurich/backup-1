var HEROS = [
    { name: 'mad', id: 1 },
    { name: 'man', id: 2 },
    { name: 'dad', id: 3 },
    { name: 'mom', id: 4 }
];
var HerosComponentController = (function () {
    function HerosComponentController() {
    }
    HerosComponentController.prototype.$onInit = function () {
        this.heros = HEROS;
    };
    return HerosComponentController;
}());
var HerosComponent = (function () {
    function HerosComponent() {
        this.controller = HerosComponentController;
        this.template = "\n<ul>\n<li ng-repeat=\"user in $ctrl.heros\">{{user.name}}</li>\n</ul>\n";
    }
    return HerosComponent;
}());
angular.module('myApp', []);
angular.module('myApp')
    .component('heros', new HerosComponent());
