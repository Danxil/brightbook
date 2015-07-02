app.directive("whiteColorHeader", function($rootScope) {
    return {
        link: function ($scope, elem, attrs) {
            $scope.$watch('whiteColorHeader', function(newVal) {
                if (newVal)
                    $('body').addClass('white-color-header')
                else
                    $('body').removeClass('white-color-header')
            })

            $rootScope.$on("$routeChangeSuccess", function () {
                $rootScope.whiteColorHeader = false
            })
        }
    }
})

app.directive("setWhiteColorHeader", function($rootScope) {
    return {
        link: function ($scope, elem, attrs) {
            $rootScope.whiteColorHeader = true
        }
    }
})