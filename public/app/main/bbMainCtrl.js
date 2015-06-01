angular.module('app').controller('bbMainCtrl', function ($scope, $http, $rootScope) {
    $scope.books = [
        {
            img: "/images/books/pic-1.png",
            img2: "/images/books/pic-2.png",
            title: "Ловушки мышления",
            author: "Чип Хиз, Дэн Хиз"
        },
        {
            img: "/images/books/pic-1.png",
            img2: "/images/books/pic-2.png",
            title: "Ловушки мышления",
            author: "Чип Хиз, Дэн Хиз"
        },
        {
            img: "/images/books/pic-1.png",
            img2: "/images/books/pic-2.png",
            title: "Ловушки мышления",
            author: "Чип Хиз, Дэн Хиз"
        },
        {
            img: "/images/books/pic-1.png",
            img2: "/images/books/pic-2.png",
            title: "Ловушки мышления",
            author: "Чип Хиз, Дэн Хиз"
        },
        {
            img: "/images/books/pic-1.png",
            img2: "/images/books/pic-2.png",
            title: "Ловушки мышления",
            author: "Чип Хиз, Дэн Хиз"
        }
    ];

    $scope.switchBookImg = function (book) {
        var originalImg = book.img;
        book.img = book.img2;
        book.img2 = originalImg;
    }
});