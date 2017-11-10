(function(){
    'use strict';
    angular.module('myApp', []);
    angular.module('myApp')
            .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$scope', '$http'];
    function myCtrl($scope, $http){
        var mc = this, id = 0;
        mc.destinations = [];
        mc.addDestination = addDestination;
        mc.remove = remove;
        mc.getPosts = getPosts;
        mc.titles = [];

        function addDestination(){
            id++;
            var newDestination = {
                id: id,
                city: mc.city,
                state: mc.state
            };
            mc.destinations.push(newDestination);

            mc.city = "";
            mc.state = "";
        }

        function remove(id){
            mc.destinations = mc.destinations.filter(function(elem, index){
                return elem.id !== id;
            });
        }

        function getPosts(){
            $http.get('https://jsonplaceholder.typicode.com/posts')
            .then(getPostsSuccess, getPostsFailed);
        }

        function getPostsSuccess(res){
            console.log(res.data);
            mc.titles.push(res.data[0].title);
            console.log(mc.titles);
        }
        function getPostsFailed(err){
            console.log(err);
        }
    }        
})();