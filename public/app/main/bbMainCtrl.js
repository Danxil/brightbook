angular.module('app').controller('bbMainCtrl', function ($scope, $http, $rootScope) {
    $scope.books = [
        {
            img: "/images/books/main-books/book-1.png",
            img2: "/images/books/main-books/book-2.png",
            title: "Межигорский Синдром.",
            author: "Сергей Лещенко",
            id: "1"
        },
        {
            img: "/images/books/main-books/book-1.png",
            img2: "/images/books/main-books/book-2.png",
            title: "Межигорский Синдром.",
            author: "Сергей Лещенко",
            id: "1"
        },
        {
            img: "/images/books/main-books/book-1.png",
            img2: "/images/books/main-books/book-2.png",
            title: "Межигорский Синдром.",
            author: "Сергей Лещенко",
            id: "1"
        },
        {
            img: "/images/books/main-books/book-1.png",
            img2: "/images/books/main-books/book-2.png",
            title: "Межигорский Синдром.",
            author: "Сергей Лещенко",
            id: "1"
        },
        {
            img: "/images/books/main-books/book-1.png",
            img2: "/images/books/main-books/book-2.png",
            title: "Межигорский Синдром.",
            author: "Сергей Лещенко",
            id: "/2"
        }
    ];

    $scope.switchBookImg = function (book) {
        var originalImg = book.img;
        book.img = book.img2;
        book.img2 = originalImg;
    }
});