
app.controller('worksController', [
    '$scope',
    "$http",
    function worksController($scope, $http){
        $http.get('/js/data/works.json').then(function(res){

            $scope.albums = res.data.albums;
        });
    }
              
]);