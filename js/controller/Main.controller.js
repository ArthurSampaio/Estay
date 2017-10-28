'use strict';
(function () {
    var app = angular.module('estayApp');

    app.controller("MainController", function MainController($state, AuthService) {

        var mainCtrl = this;
        mainCtrl.user;
        mainCtrl.loginPic = "./img/icons/enter.svg";

        mainCtrl.search = function search() {
            console.log("click in search");
        };

        mainCtrl.goToMain = () => {
            $state.go("estay.home");
        };

        mainCtrl.login = () => {
            return AuthService.signIn().then(
                function success(response) {
                    mainCtrl.user = response;
                    console.log(mainCtrl.user);
                },
                function error(response) {
                    console.log(response);
                }
            );
        };

        mainCtrl.logout = () => {
            return AuthService.signOut().then(
                function success(response) {
                    mainCtrl.user = response;
                    //todo, toast dizendo q saiu. 
                }, function error(response) {
                    //todo
                }
            )
        };

    });
})();