app.controller('showcaseController', [
    '$scope',
    "$http",
    function showcaseController($scope, $http){
        
        var controller = this;
        this.windowHeight = $(window).height();
        
        $(window).on('resize', function(e) {
            controller.windowHeight = $(window).height();
        });
        console.log('calling load page');
        $http.get('/js/data/showCase.json').then(function(res){
            console.log('loading home page');
            console.log(res.data);
            $scope.showcases = res.data; 

            controller.setGallery();
            
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