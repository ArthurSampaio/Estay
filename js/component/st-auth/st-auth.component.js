'use strict';
(() => {
    var app = angular.module('estayApp');


    function UserAuthController($mdMenu) {
        var authCtrl = this;


        authCtrl.$onInit = () => {
           // console.log(authCtrl.logado);
        };

        authCtrl.login = () => {
            authCtrl.signIn({});
        };

        authCtrl.logout = () => {
            authCtrl.signOut({});
        };

        authCtrl.$onChanges = (obj) => {
            if (obj.user) {
                if (obj.user.currentValue !== undefined) {
                    authCtrl.user = obj.user.currentValue;
                    authCtrl.logado = true;
                } else {
                    authCtrl.user = obj.user.currentValue;
                    authCtrl.logado = false;
                }
            }
        };

    }



    app.component('stAuth', {
        templateUrl: 'js/component/st-auth/st-auth.component.html',
        controller: UserAuthController,
        controllerAs: 'authCtrl',
        bindings: {
            user: '<',
            signIn: '&',
            signOut: '&',

        }
    });

})();