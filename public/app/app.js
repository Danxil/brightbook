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
        .when('/cabinet', {
            templateUrl: '/partials/cabinet/cabinet',
            controller: 'bbCabinetCtrl'
        })
        .when('/category/:categoryId/book/:bookId', {
            templateUrl: '/partials/book/book',
            controller: 'bbBookCtrl'
        })
        .otherwise('/')
});