app.directive("menuSlide", function($rootScope) {
    return {
        link: function ($scope, elem, attrs) {
            var frame = 1
            var maxFrames = Math.ceil($('.menu-slide').height() / height)
            var height = parseInt($('.container-wrapper').height())

            function checkActive() {
                $('.menu-slide-up').removeClass('not-active')
                $('.menu-slide-down').removeClass('not-active')

                if (frame - 1 <= 0)
                    $('.menu-slide-up').addClass('not-active')

                if (frame + 1 > maxFrames)
                    $('.menu-slide-down').addClass('not-active')
            }

            $('.menu-slide-up').click(function() {
                if (frame - 1 <= 0)
                    return

                frame--

                checkActive()

                var top = parseInt($('.menu-slide').css('top'))

                $('.menu-slide').css('top', top + height + 'px')
            })

            $('.menu-slide-down').click(function() {
                if (frame + 1 > maxFrames)
                    return

                frame++

                checkActive()

                var top = parseInt($('.menu-slide').css('top'))

                $('.menu-slide').css('top', top - height + 'px')
            })

            checkActive()
        }
    }
})