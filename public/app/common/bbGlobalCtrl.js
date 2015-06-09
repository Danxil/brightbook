angular.module('app').controller('bbGlobalCtrl', function ($scope, $rootScope, $document) {
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
                if(!stateBefore) {
                    expandSubMenu(menuName, stateBefore);
                }
            });
        }else {
            expandSubMenu(menuName, stateBefore);
        }
    };

    var expandSubMenu = function (menuName, stateBefore) {
            $scope.subMenuMarkers.booksVisible = menuName == 'books' ? !stateBefore : false;
            $scope.subMenuMarkers.authorsVisible = menuName == 'authors' ? !stateBefore : false;
            $scope.subMenuMarkers.moreVisible = menuName == 'more' ? !stateBefore : false;
            $scope.subMenuMarkers.loginVisible = menuName == 'login' ? !stateBefore : false;
            $scope.subMenuMarkers.searchVisible = menuName == 'search' ? !stateBefore : false;
    }
});