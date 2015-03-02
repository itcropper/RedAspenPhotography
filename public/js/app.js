
var app = angular.module('redAspenApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',        {templateUrl: '/views/partials/home.html'})
        .when('/about',   {templateUrl: '/views/partials/about.html', controller: 'aboutmeController'})
        .when('/blog',    {templateUrl: '/views/partials/blog.html'})
        .when('/pricing', {templateUrl: '/views/partials/pricing.html', controller: 'pricingController'})
        .when('/works',   {templateUrl: '/views/partials/works.html', controller: 'worksController'})
        .when('/works/:name', {templateUrl: '/views/partials/singleAlbum.html', controller: 'singleAlbumController'})
        .when('/contact', {templateUrl: '/views/partials/contact.html'})
        .otherwise({ redirectTo: '/' });

    });