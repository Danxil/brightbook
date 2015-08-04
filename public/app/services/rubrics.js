app.service('rubrics', function($http, config) {
    return {
        getAll: function () {
            var url = config.API_URL + '/rubric'

            return $http.get(url)
        },
    }
})