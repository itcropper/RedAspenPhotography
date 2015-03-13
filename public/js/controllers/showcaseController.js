app.controller('showcaseController', [
    '$scope',
    "$http",
    function showcaseController($scope, $http){
        
        var controller = this;
        this.windowHeight = $(window).height();
        
        $(window).on('resize', function(e) {
            controller.windowHeight = $(window).height();
        });

        $http.get('/js/data/showCase.json').then(function(res){
            
            $scope.showcases = res.data; 
            
            console.log($scope.showcases.map(function(s) {return s.src;}));
            
            $scope.load = function(){
                controller.setGallery();
            }
            $scope.load();
      });
        
      controller.setGallery = function(e) {
          
          if( $(".galleria").length !== 0 ) {
              Galleria.loadTheme('/js/behavior/libs/galleria.classic.js');
              Galleria.run('.galleria', {
                    imageCrop: true,
                    transition: 'fade',
                    autoplay: 5000,
                    idleMode:false,
                    showInfo: true,
                    _toggleInfo: false,
                    height: controller.windowHeight
                });
            }
      }
    }
]);