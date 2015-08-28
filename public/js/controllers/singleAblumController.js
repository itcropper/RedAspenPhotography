app.controller('singleAlbumController', [
    '$scope',
    '$http',
    '$routeParams',
    function singleAlbumController($scope, $http, $routeParams){
        
    function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex ;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }
        
        $('.site-loader').show();
        $http.get('/js/data/albums.json').then(function(res){
            $scope.images = res.data[$routeParams.name.toLowerCase()].images;
            $scope.images = shuffle($scope.images);
            $scope.title = res.data[$routeParams.name.toLowerCase()].title;
            
            var counter = 0;
            var interval = setInterval(function(e){
                if(counter += 100 > 10000){
                    clearInterval(interval);   
                    return;
                }
                if($('.site-loader').length){
                    clearInterval(interval);
                    $(window).trigger('album-loaded');
                    $('.site-loader').hide();
                }

            }, 1000);
        });
    }
]);