angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'ngSanitize']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {templateUrl: '/partials/main/main', controller: 'bbMainCtrl'})
        .when('/:page', {templateUrl: '/partials/main/main', controller: 'bbMainCtrl'})
});