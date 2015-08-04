app.service('authors', function($http, config) {
    return {
        getAll: function () {
            var url = config.API_URL + '/author'

            return $http.get(url)
        },

        getOne: function(id) {
            var url = config.API_URL + '/author/' + id

            return $http.get(url)
        },
    }
})