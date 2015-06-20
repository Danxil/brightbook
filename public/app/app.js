var app = angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'ngSanitize', 'duScroll']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {templateUrl: '/partials/main/main', controller: 'bbMainCtrl'})
        .when('/main', {
            templateUrl: '/partials/main/main',
            controller: 'bbMainCtrl'
        })
        .when('/book', {
            templateUrl: '/partials/book/book',
            controller: 'bbBookCtrl'
        })
        .when('/cabinet', {
            templateUrl: '/partials/cabinet/cabinet',
            controller: 'bbCabinetCtrl'
        })
        .when('/book2', {
            templateUrl: '/partials/book2/book',
            controller: 'bbBook2Ctrl'
        })
});