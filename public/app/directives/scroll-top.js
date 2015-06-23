app.directive("scrollTop", function($rootScope) {
    return {
        link: function ($scope, elem, attrs) {
            $rootScope.$on("$routeChangeSuccess", function () {
                if ($(window).scrollTop() > 0)
                    $('html, body').scrollTop(0)
            })
        }
    }
})