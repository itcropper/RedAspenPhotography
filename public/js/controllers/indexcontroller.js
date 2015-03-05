
app.controller('indexcontroller', [
    '$scope',
    function indexcontroller($scope){
        $(window).trigger('home-loaded');
    }
]);