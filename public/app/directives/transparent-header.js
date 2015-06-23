app.directive("transparentHeader", function($rootScope) {
    return {
        scope: {
            transparent: '=transparentHeader',
        },
        link: function ($scope, elem, attrs) {
            $scope.$watch('transparent', function(newVal) {
                if (newVal)
                    $('body').addClass('transparent-header')
                else
                    $('body').removeClass('transparent-header')
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