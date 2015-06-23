angular.module('app').controller('bbCategoryCtrl', function ($scope, $http, $rootScope, category) {
    $scope.category = category
    $rootScope.transparentHeader = true
});