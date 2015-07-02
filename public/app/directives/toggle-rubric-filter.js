app.directive("toggleRubricFilter", function($timeout) {
    return function($scope, elem, attrs) {
        elem.click(function() {
            $('.rubric-filter:not(' + attrs.toggleRubricFilter + ')').hide('slow', function() {
                $(attrs.toggleRubricFilter).toggle('slow')
            })

            $('[data-toggle-rubric-filter]:not([data-toggle-rubric-filter="' + attrs.toggleRubricFilter + '"])').removeClass('active')
            elem.toggleClass('active')
        })
    };
});
