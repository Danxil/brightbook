angular.module('app').controller('bbBook2Ctrl', function ($scope, $http, $rootScope) {
    $scope.bookInfo = [
        {
            title: 'Дата выхода первого издания',
            value: '13.06.1970'
        },
        {
            value: 'ISBN 978-5-00057-534-5',
        },
        {
            value: 'Объем 256 стр.'
        },
        {
            value: 'Формат: 60x90/16'
        },
        {
            value: 'Теврдый переплет'
        },
        {
            title: 'Количество переизданий',
            value: 'первое издание'
        },
        {
            title: 'Рекомендованная розничная цена',
            value: '220 гривен'
        }
    ]

    $scope.aboutAuthor = 'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья.'
    $scope.aboutBook = 'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья.' +
        ' Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья.' +
        ' Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья.' +
        ' Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья. ' +
        'Тал Бен-Шахар уже больше 10 лет изучает и преподает тему счастья.'
});