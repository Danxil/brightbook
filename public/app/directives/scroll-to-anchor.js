app.directive("scrollToAnchor", function() {
    return function ($scope, elem, attrs) {
        elem.click(function (e) {
            e.preventDefault()

            $('html, body').animate({
                scrollTop: $(attrs.href).offset().top - $('.header').height()
            }, 1000)
        })
    }
})