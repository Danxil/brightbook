app.service('books', function($http, config) {
    return {
        getAll: function () {
            var url = config.API_URL + '/book'

            return $http.get(url)
        },

        getOne: function(id) {
            var url = config.API_URL + '/book/' + id

            return $http.get(url)
        },
    }
})