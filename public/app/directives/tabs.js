app.directive("tabs", function($timeout) {
    return function($scope, elem, attrs) {
        $timeout(function () {
            var togglers = elem.find('[data-tab-toggler]')

            var activeElem = null
            var activeToggler = null

            _.each(togglers, function(elem) {
                elem = $(elem)

                var currBlock = $(elem.attr('href'))
                currBlock.hide()

                if (elem.hasClass('active')) {
                    activeElem = $(elem.attr('href'))
                    activeElem.show()

                    activeToggler = elem
                }

                elem.click(function(e) {
                    e.preventDefault()

                    if (activeElem)
                        activeElem.hide()

                    if (activeToggler)
                        activeToggler.removeClass('active')

                    activeToggler = elem
                    activeElem = $(elem.attr('href'))

                    activeElem.show()
                    activeToggler.addClass('active')
                })
            })
        })
    };
});
