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

            var i = 0,
                image = {};
            
            for(i = 0; i < res.data.length; i++){
                
                image = new Image();
                image.src = res.data[i].src;
                //console.log(i, image, res.data[i].src);
                if(i === res.data.length - 1){
                    image.onload = function(){
                        $scope.showcases = res.data; 
                        controller.setGallery();
                    };
                }
            }
            
            
            
            
            //preload and cache the works images:
            $http.get('/js/data/works.json').then(function(res){

                for(i = 0; i < res.data.albums.length; i++){
                    image = new Image(res.data.albums[i].imgsrc);   
                }
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
                }, function(){
                        document.hideLoader();
                    });
            }
      }
    }
]);