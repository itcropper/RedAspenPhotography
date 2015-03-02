app.controller('blogController', [
    '$scope',
    '$http',
    function blogController($scope, $http){
        
        $http.get('/js/data/blog.json').then(function(res){
            $scope.iframes = res.data.targets;
        });
    }
]);