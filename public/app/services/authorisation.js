app.factory('authorisation', function($http, $q, $window, ipCookie) {
    return {
        login: function (loginData) {
            return $http.post("/api/login", {login: loginData.login, password: loginData.password})
        },
        registration: function (registrationData) {
            return $http.post("/api/registration", {login: registrationData.login, password: registrationData.password})
        },
        getUserData: function () {
            return $http.get("/api/login")
        }
    }
})