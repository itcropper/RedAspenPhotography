app.controller('aboutmeController', [
    '$scope',
    "$http",
    function aboutmeController($scope, $http){

          $http.get('/js/data/about-me.json').then(function(res){
                $scope.profileImages = res.data.profileImages; 
                $scope.testimonials = res.data.testimonials;
              
                setTimeout(function(){
                    var owl2 = $("#owl-testimonials");
                    owl2.owlCarousel({
                      items : 1,
                      itemsDesktop : [1400,1],
                      itemsDesktopSmall : [1100,1],
                      itemsTablet: [600,1],
                      itemsMobile : [400,1],
                      pagination : true,
                      navigation : false
                    });
                }, 0);
          });
    }
]);