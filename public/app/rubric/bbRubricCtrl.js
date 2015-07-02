angular.module('app').controller('bbRubricCtrl', function ($scope, $http, $rootScope, rubric) {
    $scope.rubric = rubric

    $scope.rubricFilters = {
        category: {},
        author: {}
    }
});