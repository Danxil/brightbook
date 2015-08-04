var app = angular.module('app', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'duScroll',
    'ipCookie',
    'uiGmapgoogle-maps'
]);

app.config(function ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        china: true
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'bbMainCtrl',
        })
        .when('/cabinet', {
            templateUrl: '/privat/cabinet',
            controller: 'bbCabinetCtrl'
        })
        .when('/contacts', {
            templateUrl: '/partials/contacts/contacts',
            controller: 'bbContactsCtrl'
        })
        .when('/produce-book', {
            templateUrl: '/partials/produce-book/produce-book',
            controller: 'bbProduceBookCtrl'
        })
        .when('/offer-book', {
            templateUrl: '/partials/offer-book/offer-book',
            controller: 'bbOfferBookCtrl'
        })
        .when('/about', {
            templateUrl: '/partials/about/about',
            controller: 'bbAboutCtrl'
        })
        .when('/where-by', {
            templateUrl: '/partials/where-by/where-by',
            controller: 'bbWhereByCtrl'
        })
        .when('/news', {
            templateUrl: '/partials/news/news',
            controller: 'bbNewsCtrl'
        })
        .when('/author', {
            templateUrl: '/partials/author/author',
            controller: 'bbAuthorCtrl',
            resolve: {
                author: function ($q) {
                    var def = $q.defer()

                    var author = {
                        name: 'Сергей Лещенко',
                        avatar: '/images/books/1/avtor.jpg',
                        aboutAuthor: 'журналист, народный депутат 8-го созыва, преподаватель школы журналистики Украинского католического университета (с 2015). До этого был заместителем главного редактора интернет-издания «Украинская правда» (2002-2014). В 2014 году в издательстве БрайтБукс вышла вышла книга «Межигорский синдром».',
                        fbLink: '/',
                        blogLink: '/',
                        books: [
                            {
                                id: '1',
                                image: '/images/books/1/book-1.png'
                            }
                        ]
                    }

                    def.resolve(author)

                    return def.promise
                }
            }
        })
        .when('/rubric/:rubricId', {
            templateUrl: '/partials/rubric/rubric',
            controller: 'bbRubricCtrl',
            resolve: {
                rubric: function ($q, $route, $timeout, $rootScope) {
                    var def = $q.defer()

                    var rubrics = {
                        1: {
                            id: 1,
                            title: 'Бестселеры',
                            description: 'Самые покупаемые книги, которые пользуются искренней любовью покупателей',
                            books: [
                                {
                                    id: 1,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 2,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                },
                                {
                                    id: 3,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 4,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                },
                                {
                                    id: 5,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 6,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                },
                                {
                                    id: 7,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 8,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                }
                            ]
                        },
                        2: {
                            id: 2,
                            title: 'Новинки',
                            description: 'Книги, которые только вышли в свет',
                            books: [
                                {
                                    id: 1,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 2,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                }
                            ]
                        },
                        3: {
                            id: 3,
                            title: 'Рекомендуемые',
                            description: 'Книги, которые подобраны редакцией издательства',
                            books: [
                                {
                                    id: 1,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 2,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                }
                            ]
                        },
                        4: {
                            id: 4,
                            title: 'Скоро',
                            description: 'Книги, которые поступят в продажу совсем скоро',
                            books: [
                                {
                                    id: 1,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 2,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                }
                            ]
                        },
                        5: {
                            id: 5,
                            title: 'Электронные книги',
                            description: 'Книги доступные только в форматах pdf и epub',
                            books: [
                                {
                                    id: 1,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Политика',
                                    title: 'Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'Сергей Лещенко',
                                },
                                {
                                    id: 2,
                                    image: '/images/books/1/book-1.png',
                                    category: 'Бизнес',
                                    title: 'не Межигорский Синдром. Диагноз власти Виктора Януковича',
                                    author: 'не Сергей Лещенко',
                                }
                            ]
                        }
                    }

                    rubricId = $route.current.params.rubricId

                    if (!rubrics[rubricId])
                        def.reject()

                    var rubric = _.clone(rubrics[rubricId])

                    rubric.booksCategories =[]
                    rubric.booksAuthors =[]

                    _.each(rubric.books, function(book) {
                        if (rubric.booksCategories.indexOf(book.category) == -1)
                            rubric.booksCategories.push(book.category)

                        if (rubric.booksAuthors.indexOf(book.author) == -1)
                            rubric.booksAuthors.push(book.author)
                    })

                    def.resolve(rubric)

                    return def.promise
                }
            }
        })
        .when('/category/:categoryId', {
            templateUrl: '/partials/category/category',
            controller: 'bbCategoryCtrl',
            resolve: {
                data: function($q, $route, categories, books, authors) {
                    var def = $q.defer()
                      , data = {}
                      , id = $route.current.params.categoryId

                    var booksDefs = []

                    categories.getOne(id).then(function(result) {
                        data.category = result.data.data

                        data.category.books.forEach(function(item) {
                            var def = $q.defer()
                            booksDefs.push(def.promise)

                            books.getOne(item.id).then(function(result) {
                                var book = result.data.data

                                if (!book.authors.length)
                                    return def.resolve(book)

                                _.each(book.authors, function(author, index) {
                                    authors.getOne(author.id).then(function(result) {
                                        book.authors[index] = result.data.data

                                        def.resolve(book)
                                    })
                                })
                            })


                        })

                        $q.all(booksDefs).then(function(books) {
                            data.books = books

                            def.resolve(data)
                        })
                    })

                    return def.promise
                }
            }
        })
        .when('/book/:bookId', {
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

app.run(function ($rootScope, $location, config) {
    $rootScope.config = config

    $rootScope.transparentHeader = false

    $rootScope.$on("$routeChangeSuccess", function () {
        if ($rootScope.subMenuClose)
            $rootScope.subMenuClose()
    })

    $rootScope.$on("$routeChangeError", function () {
        console.log("failed to change routes");

        $location.path('/')
    })
})