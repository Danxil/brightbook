app.controller('bbGlobalCtrl', function(
    $scope,
    $rootScope,
    $document,
    $timeout,
    authorisation,
    $location,
    categories,
    rubrics
) {
    $scope.menu = {}

    rubrics.getAll().then(function(result) {
        $scope.menu.rubrics = result.data.data
    })

    categories.getAll().then(function(result) {
        var data = result.data.data
        $scope.menu.categories = _.filter(data, function(item) {
            return !item.highlight
        })

        $scope.menu.highlightCategories = _.filter(data, function(item) {
            return item.highlight
        })
    })

    authorisation.getUserData().then(function(userData) {
        $scope.authorisation.userData = userData
    }, function() {
    })

    $scope.subMenuMarkers = {
        booksVisible: false,
        authorsVisible: false,
        moreVisible: false,
        loginVisible: false,
        searchVisible: false
    };
    $scope.subMenuOpen = function (menuName) {
        var stateBefore = $scope.subMenuMarkers[menuName + 'Visible'];
        var onTop = document.body.scrollTop === 0;

        if(!onTop) {
            $document.scrollToElementAnimated(angular.element(document.getElementById('header-false'), null, 1000)).then(function () {
                $timeout(function() {
                    if(!stateBefore) {
                        expandSubMenu(menuName, stateBefore);
                    }
                }, 100)
            });
        } else {
            expandSubMenu(menuName, stateBefore);
        }
    };

    $rootScope.subMenuClose = function () {
        expandSubMenu();

        if(!$scope.$$phase)
            $scope.$apply()
    }

    var expandSubMenu = function (menuName, stateBefore) {
        $scope.subMenuMarkers.booksVisible = menuName == 'books' ? !stateBefore : false;
        $scope.subMenuMarkers.authorsVisible = menuName == 'authors' ? !stateBefore : false;
        $scope.subMenuMarkers.moreVisible = menuName == 'more' ? !stateBefore : false;
        $scope.subMenuMarkers.loginVisible = menuName == 'login' ? !stateBefore : false;
        $scope.subMenuMarkers.searchVisible = menuName == 'search' ? !stateBefore : false;

        var menuOpen = false

        _.each($scope.subMenuMarkers, function(item, key) {
            if (item)
                menuOpen = true
        })

        if (menuOpen)
            $(window).bind('scroll', $scope.subMenuClose)
        else
            $(window).unbind('scroll', $scope.subMenuClose)
    }

    $scope.authorisation = {
        clearAllData: function() {
            this.registrationData = {}
            this.loginData = {}
            this.registrationError = null
            this.loginError = null

            $scope.loginForm.$setUntouched()
            $scope.registrationForm.$setUntouched()
        },
        login: function() {
            if ($scope.loginForm.$invalid)
                return

            authorisation.login(this.loginData).then((function(user) {
                this.userData = user.data
                this.clearAllData()

                $location.path('/cabinet')
            }).bind(this), (function(error) {
                this.loginError = error.status
            }).bind(this))
        },
        registration: function() {
            if ($scope.registrationForm.$invalid)
                return

            this.registrationError = null

            authorisation.registration(this.registrationData).then((function(user) {
                this.userData = user.data

                this.clearAllData()
                this.registrationActive = this.registrationError = false
            }).bind(this), (function(error) {
                this.registrationError = error.status
            }).bind(this))
        },
        loginData: {}
    }
});