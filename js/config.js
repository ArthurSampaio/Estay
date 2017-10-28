'use strict';

(function () {

    var app = angular.module("estayApp", [
        'ngAnimate',
        'ngAria',
        'ngSanitize',
        'ngMaterial',
        'ui.router'
    ]);

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAPZBvr0-kpY8Xu85LsnbBfIM-x36JAef4",
        authDomain: "estay-home.firebaseapp.com",
        databaseURL: "https://estay-home.firebaseio.com",
        projectId: "estay-home",
        storageBucket: "estay-home.appspot.com",
        messagingSenderId: "67063814159"
    };
    firebase.initializeApp(config);

    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('');

        $stateProvider
            .state("estay", {
                views: {
                    main: {
                        templateUrl: "view/main.html",
                        controller: 'MainController as mainCtrl'
                    }
                }

            })
            .state("estay.home", {
                url: '/home',
                views: {
                    content: {
                        templateUrl: 'view/home.html',
                        controller: 'HomeController as homeCtrl'
                    }
                }
            })



    });

    app.run(['$rootScope', '$state', function ($rootScope, $state) {


        $state.defaultErrorHandler(function (error) {
            console.log(error);
        });
    }]);



})();