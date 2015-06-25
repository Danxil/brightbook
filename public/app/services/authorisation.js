app.factory('authorisation', function($http, $q, $window, ipCookie) {
    return {
        login: function (loginData) {
            return $http.post("/api/login", {login: loginData.login, password: loginData.password})
        },
        getUser: function () {
            if (this.userInfo) {
                return this.userInfo;
            } else {
                return this.login();
            }
        },
        updateUser: function () {
            return this.login();
        }
    }
})