app.controller('pricingPackageController', [
    '$scope',
    '$http',
    '$routeParams',
    function pricingPackageController($scope, $http, $routeParams){

        $http.get('/js/data/pricing.json').then(function(res){
            
            
            $scope.data = res.data[$routeParams.type.toLowerCase()];
            
        });
    }
]);