app.directive("transparentHeader", function($rootScope) {
    return {
        link: function ($scope, elem, attrs) {
            $scope.$watch('transparentHeader', function(newVal) {
                if (newVal)
                    $('body').addClass('transparent-header')
                else
                    $('body').removeClass('transparent-header')
            })

            $rootScope.$on("$routeChangeSuccess", function () {
                $rootScope.transparentHeader = false
            })

            $(window).scroll(function() {
                if ($(window).scrollTop() > 0)
                    $('.header-wrapp').addClass('scrolled')
                else
                    $('.header-wrapp').removeClass('scrolled')
            })
        }
    }
})

app.directive("setTransparentHeader", function($rootScope) {
    return {
        link: function ($scope, elem, attrs) {
            $rootScope.transparentHeader = true
        }
    }
})