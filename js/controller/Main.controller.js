'use strict';
(function () {
    var app = angular.module('estayApp');

    app.controller("MainController", function MainController($state) {

        var mainCtrl = this;


        mainCtrl.search = function search() {
            console.log("click in search");
        };

        mainCtrl.goToMain = () => {
            $state.go("cidadao-de-bolso.home");
        };

        mainCtrl.login = () => {

        };

        mainCtrl.logout = () => {

        };

    });
})();