'use strict';
(() => {
    var app = angular.module('estayApp');

    app.service('AuthService', function ($q) {

        var service = this;
        service.auth = firebase.auth();
        service.user;

        //service.auth.onAuthStateChanged(service.onAuthStateChanged.bind(service));

        service.signIn = () => {
            var deffered = $q.defer(); 
            var provider = new firebase.auth.GoogleAuthProvider();
            service.auth.signInWithPopup(provider).then(
                function success(response){
                    service.user = User(response.user.displayName, response.user.photoURL); 
                    deffered.resolve(service.user);
                }, function error(erro) {
                    deffered.reject(erro);
                }
            );
            return deffered.promise;
        };

        service.signOut = () => {
            var deffered = $q.defer();
            service.auth.signOut().then(
                function success(response){
                    console.log(response);
                    deffered.resolve(response);
                }, function error(response){
                    deffered.reject(response);
                }
            );
            return deffered.promise;
        };

        service.isLogged = () => {
            let result = false; 
            if (service.auth.currentUser){
                return true;
            }
            return result;
        };


    });
})();