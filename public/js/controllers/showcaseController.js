app.controller('showcaseController', [
    '$scope',
    "$http",
    function showcaseController($scope, $http){

          $http.get('/js/data/showCase.json')
               .then(function(res){
                  $scope.showcases = res.data; 
              
              $(window).trigger('home-loaded');
          });
    }
]);