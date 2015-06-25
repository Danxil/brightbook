app.factory('httpRequestInterceptor', function(ipCookie, $q, $rootScope) {
    return {
        request: function(config) {
            if (ipCookie('token')) {
                config.headers['Authorization'] = 'Token ' + ipCookie('token');
            }
            return config;
        }
    };
});
