app.filter("rubricFilter", function() {
    return function(input, categoriesFilter, authorsFilter) {
        var categoriesFilterActive = _.values(categoriesFilter).indexOf(true) != -1
        var authorsFilterActive = _.values(authorsFilter).indexOf(true) != -1

        input = _.filter(input, function(item) {
            var categorySuccess = !categoriesFilterActive || !!categoriesFilter[item.category]
            var authorSuccess = !authorsFilterActive || !!authorsFilter[item.author]

            return categorySuccess && authorSuccess
        })

        return input;
    };
});
