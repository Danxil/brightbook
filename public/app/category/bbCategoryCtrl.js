angular.module('app').controller('bbCategoryCtrl', function ($scope, $http, $rootScope, data) {
    $scope.category = data.category
    $scope.books = data.books
    console.log(data.books)
});