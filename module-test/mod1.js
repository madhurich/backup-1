(function(){
    angular.module('myApp.mod1', ['blockUI']);

    angular.module('myApp.mod1')
            .config(config);
    
    config.$inject = ['blockUIConfig'];
    function config(){

    }        

})();