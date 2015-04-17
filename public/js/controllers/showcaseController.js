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

                var images = [];
                
            function loadShowcases(i){

                if(i >= res.data.length){
                    $scope.showcases = res.data;
                    $scope.load = function(){
                        console.log('loaded');
                        controller.setGallery();
                    }
                    return;   
                }
                
                images[i] = new Image();   
                images[i].src = res.data[i].src;
                images[i].onload = function(){loadShowcases(i + 1);};
            }
            loadShowcases(0);
            
            
            
            //preload and cache the works images:
            $http.get('/js/data/works.json').then(function(res){
                images = [];
                
                function loadImages(i){
                     
                    if(i >= res.data.albums.length){
                     return;   
                    }
                    images[i] = new Image();   
                    images[i].src = res.data.albums[i].imgsrc;
                    images[i].onload = function(){loadImages(i + 1);};
                }
                loadImages(0);
            });
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