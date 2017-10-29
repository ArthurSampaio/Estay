'use strict';
(function () {
    var app = angular.module('estayApp');

    app.controller("CityController", function CityController($state, city) {

        var cityCtrl = this;
        cityCtrl.city = city; 
        console.log(city);
        

    });
})();