app.service('categories', function($http, config) {
    return {
        getAll: function () {
            var url = config.API_URL + '/category'

            return $http.get(url)
        },

        getOne: function(id) {
            var url = config.API_URL + '/category/' + id

            return $http.get(url)
        },
    }
})