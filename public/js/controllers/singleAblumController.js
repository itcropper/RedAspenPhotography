app.controller('singleAlbumController', [
    '$scope',
    '$http',
    '$routeParams',
    function singleAlbumController($scope, $http, $routeParams){
        $('.site-loader').show();
        $http.get('/js/data/albums.json').then(function(res){
            $scope.images = res.data[$routeParams.name.toLowerCase()].images;
            $scope.title = res.data[$routeParams.name.toLowerCase()].title;
            
            setTimeout(function(e){
                $(window).trigger('album-loaded');
                $('.site-loader').hide();
            }, 1000);
        });
    }
]);