angular.module('app').controller('bbCategoryCtrl', function ($scope, $http, $rootScope) {
    $scope.books = [
        {
            id: 1,
            image: '/images/books/1/book-1.png',
            bookBanner: '/images/books/desc-book-bg.jpg',
            category: 'Книга в подарок женщине',
            title: 'Как разговаривать с кем угодно',
            author: 'Марк Роудз',
            price: {
                analog: '310',
                ebook: '210'
            }
        },
        {
            id: 2,
            image: '/images/books/1/book-1.png',
            bookBanner: '/images/books/desc-book-bg.jpg',
            category: 'Книга в подарок женщине',
            title: 'Как разговаривать с кем угодно',
            author: 'Марк Роудз',
            price: {
                analog: '310',
                ebook: '210'
            }
        },
        {
            id: 3,
            image: '/images/books/1/book-1.png',
            bookBanner: '/images/books/desc-book-bg.jpg',
            category: 'Книга в подарок женщине',
            title: 'Как разговаривать с кем угодно',
            author: 'Марк Роудз',
            price: {
                analog: '310',
                ebook: '210'
            }
        },
        {
            id: 4,
            image: '/images/books/1/book-1.png',
            bookBanner: '/images/books/desc-book-bg.jpg',
            category: 'Книга в подарок женщине',
            title: 'Как разговаривать с кем угодно',
            author: 'Марк Роудз',
            price: {
                analog: '310',
                ebook: '210'
            }
        }
    ]
});