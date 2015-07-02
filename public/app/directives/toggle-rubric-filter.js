app.directive("toggleRubricFilter", function($timeout) {
    return function($scope, elem, attrs) {
        elem.click(function() {
            $('.rubric-filter:not(' + attrs.toggleRubricFilter + ')').hide('slow', function() {
                $(attrs.toggleRubricFilter).toggle('slow')
            })

            elem.toggleClass('active')
        })
    };
});
