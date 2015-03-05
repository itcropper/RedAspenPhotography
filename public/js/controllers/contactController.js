

app.controller("contactMe", [
    "$scope",
    "$http",
    function contactMe($scope, $http){

        $scope.submitContact = function(){
            
            $http.post('/contact', {
                "name": $scope.name,
                "email": $scope.email,
                "message": $scope.message
            }).success(function(data, status, headers){
                $scope.message = data;
            });
            
        }
        
    }
]);