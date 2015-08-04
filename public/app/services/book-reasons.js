app.service('bookReasons', function($http, config) {
    return {
        getAll: function () {
            var url = config.API_URL + '/bookreason'

            return $http.get(url)
        },
        getOne: function(id) {
            var url = config.API_URL + '/bookreason/' + id

            return $http.get(url)
        },
    }
})