var app = angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'ngSanitize', 'duScroll']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {templateUrl: '/partials/main/main', controller: 'bbMainCtrl'})
        .when('/main', {
            templateUrl: '/partials/main/main/',
            controller: 'bbMainCtrl'
        })
        .when('/cabinet', {
            templateUrl: '/partials/cabinet/cabinet/',
            controller: 'bbCabinetCtrl'
        })
        .when('/category/:categoryId/', {
            templateUrl: '/partials/category/category',
            controller: 'bbCategoryCtrl',
            resolve: {
                category: function($q, $route, $timeout) {
                    var def = $q.defer()

                    var categories = [
                        {
                            title: 'Политика',
                            books: [
                                {
                                    id: 1,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    categoryId: '1',
                                    bookBanner: '/images/books/desc-book-bg.jpg',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                    authorAvatar: '/images/books/1/avtor.jpg',
                                    price: {
                                        analog: '310',
                                        ebook: '210'
                                    },
                                    bookReason: {
                                        text: 'Основная помеха для прогресса - страх.<br><br>' +
                                        'Страх конфуза, отказа, неудачи, неопределенности. конфликта.<br><br>' +
                                        'Эта книга содержит в себе все необходимые инструменты, чтобы идти к успеху,<br>невзирая на страхи',
                                        author: 'Марси Шимов'
                                    },
                                    aboutAuthor: 'Сергей Лещенко — журналист интернет-издания «Украинская правда»,' +
                                    ' основанного Георгием Гонгадзе. Победитель Международных конкурсов и премий.' +
                                    ' В 2013 году вошел в список 100 самых влиятельных людей Украины по версии журнала «Корреспондент».',
                                    aboutBook: 'Книга рассказывает о главном символе к власти Виктора Януковича —' +
                                    ' резиденции «Межигорье», которая фактически похищена из государственной собственности,' +
                                    ' а через призму этой истории — о всей природе преступного режима. <br><br> «Грязные» финансовые' +
                                    ' схемы, подставные лица, тайные договоренности, зарубежные активы бывшей верхушки,' +
                                    ' неслыханная роскошь, которой окружил себя четвертый президент Украины, — об этом с' +
                                    ' документами в руках рассказывает Сергей Лещенко. Книга написана на основе расследовании' +
                                    ' для «Украинской правды», в ней много документов, а также эксклюзивной информации,' +
                                    ' которая до этого не была обнародована.',
                                    bookInfo: [
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
                                    ],
                                    reviews: [
                                        {
                                            avatar: '/images/books/lady-small.jpg',
                                            author: 'Сергей Лещенко',
                                            text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                                        },
                                        {
                                            avatar: '/images/books/lady-small-2.png',
                                            author: 'Сергей Лещенко',
                                            text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                                        },
                                        {
                                            avatar: '/images/books/lady-small-2.png',
                                            author: 'Сергей Лещенко',
                                            text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                                        },
                                        {
                                            avatar: '/images/books/lady-small.jpg',
                                            author: 'Сергей Лещенко',
                                            text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]

                    categoryId = $route.current.params.categoryId

                    if (!categories[0])
                        def.reject()

                    def.resolve(categories[0])

                    return def.promise
                }
            }
        })
        .when('/category/:categoryId/book/:bookId/', {
            templateUrl: '/partials/book/book',
            controller: 'bbBookCtrl',
            resolve: {
                book: function($q) {
                    var def = $q.defer()

                    var book = {
                        id: 1,
                        category: 'Политика',
                        categoryId: '1',
                        image: '/images/books/1/book-1.png',
                        bookBanner: '/images/books/desc-book-bg.jpg',
                        title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                        author: 'Сергей Лещенко',
                        authorAvatar: '/images/books/1/avtor.jpg',
                        price: {
                            analog: '310',
                            ebook: '210'
                        },
                        bookReason: {
                            text: 'Основная помеха для прогресса - страх.<br><br>' +
                            'Страх конфуза, отказа, неудачи, неопределенности. конфликта.<br><br>' +
                            'Эта книга содержит в себе все необходимые инструменты, чтобы идти к успеху,<br>невзирая на страхи',
                                author: 'Марси Шимов'
                        },
                        aboutAuthor: 'Сергей Лещенко — журналист интернет-издания «Украинская правда»,' +
                        ' основанного Георгием Гонгадзе. Победитель Международных конкурсов и премий.' +
                        ' В 2013 году вошел в список 100 самых влиятельных людей Украины по версии журнала «Корреспондент».',
                        aboutBook: 'Книга рассказывает о главном символе к власти Виктора Януковича —' +
                        ' резиденции «Межигорье», которая фактически похищена из государственной собственности,' +
                        ' а через призму этой истории — о всей природе преступного режима. <br><br> «Грязные» финансовые' +
                        ' схемы, подставные лица, тайные договоренности, зарубежные активы бывшей верхушки,' +
                        ' неслыханная роскошь, которой окружил себя четвертый президент Украины, — об этом с' +
                        ' документами в руках рассказывает Сергей Лещенко. Книга написана на основе расследовании' +
                        ' для «Украинской правды», в ней много документов, а также эксклюзивной информации,' +
                        ' которая до этого не была обнародована.',
                        bookInfo: [
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
                        ],
                        reviews: [
                            {
                                avatar: '/images/books/lady-small.jpg',
                                author: 'Сергей Лещенко',
                                text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                            },
                            {
                                avatar: '/images/books/lady-small-2.png',
                                author: 'Сергей Лещенко',
                                text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                            },
                            {
                                avatar: '/images/books/lady-small-2.png',
                                author: 'Сергей Лещенко',
                                text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                            },
                            {
                                avatar: '/images/books/lady-small.jpg',
                                author: 'Сергей Лещенко',
                                text: 'Не думал, что лицо, которое изображено на обложке, привлечет столько людей Сергей Лещенко'
                            }
                        ]
                    }

                    def.resolve(book)

                    return def.promise
                }
            }
        })
        .otherwise('/')
});

app.run(function ($rootScope, $location) {
    $rootScope.transparentHeader = false

    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.transparentHeader = false

        if ($rootScope.subMenuClose)
            $rootScope.subMenuClose()
    })

    $rootScope.$on("$routeChangeError", function () {
        console.log("failed to change routes");

        $location.path('/')
    })
})