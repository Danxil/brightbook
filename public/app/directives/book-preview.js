app.directive("bookPreview", function() {
    return function ($scope, elem, attrs) {
        elem.bookblock();
    }
})

app.directive("bookPreviewArrowPrev", function() {
    return function ($scope, elem, attrs) {
        elem.click(function (e) {
            e.preventDefault()
            $(elem.attr('href')).bookblock('prev')
        })
    }
})

app.directive("bookPreviewArrowNext", function() {
    return function ($scope, elem, attrs) {
        elem.click(function (e) {
            e.preventDefault()

            $(elem.attr('href')).bookblock('next')
        })
    }
})