var windowDimensions = {};

app.controller('showcaseController', [
    '$scope',
    "$http",
    function showcaseController($scope, $http){
        
        var controller = this;
        windowDimensions.height = $(window).height();
        
        $(window).on('resize', function(e) {
            windowDimensions.height = $(window).height();
        });

        $http.get('/js/data/showCase.json').then(function(res){
            
            $scope.showcases = res.data; 
            
            if($(".galleria").length !== 0 ){
                Galleria.loadTheme('/js/behavior/libs/galleria.classic.js');
                Galleria.run('.galleria', {
                    imageCrop: true,
                    transition: 'fade',
                    autoplay: 5000,
                    idleMode:false,
                    showInfo: true,
                    _toggleInfo: false,
                    height: windowDimensions.height
                });
            }

        });
    }
]);

//app.directive('slider',  ['$rootScope', function($rootScope) {
//
//    var count = 0;
//
//    var interval = setInterval(function() {
//        count += 1
//        console.log(count);
//        if( $(".galleria").length == 0 && count > 10) {
//            clearInterval(interval);
//        }else if($(".galleria").length !== 0 ){
//            Galleria.loadTheme('/js/behavior/libs/galleria.classic.js');
//            Galleria.run('.galleria', {
//                imageCrop: true,
//                transition: 'fade',
//                autoplay: 5000,
//                idleMode:false,
//                showInfo: true,
//                _toggleInfo: false,
//                height: windowDimensions.height
//            });
//            clearInterval(interval);
//        }
//    }, 500);
//}]);

