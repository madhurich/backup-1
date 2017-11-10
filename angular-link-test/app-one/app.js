(function(){
    angular.module('myAppOne', []);
    angular.module('myAppOne')
            .controller('myCtrlOne', myCtrlOne);
    
    myCtrlOne.$inject = ['$scope'];
    function myCtrlOne($scope){
        var vm = this;
        vm.appName = 'App One Controller';
    }
})();