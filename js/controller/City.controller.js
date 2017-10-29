'use strict';
(function () {
    var app = angular.module('estayApp');

    app.controller("CityController", function CityController($state, city, HelperService) {

        var cityCtrl = this;
        HelperService.getInfoForCity(city).then(
            function (response){
                cityCtrl.city = response;
                cityCtrl.rooms = cityCtrl.city.id === "campinagrande-pb" ? roomsAux.rooms : [];
            }
        );
    });
})();