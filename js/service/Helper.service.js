'use strict';
(() => {
    var app = angular.module('estayApp');

    app.service('HelperService', function ($q) {

        var service = this;
        service.loadCities = loadCities;


        function setUpCities(states) {

            return states.estados.map((estado) => {
               return estado.cidades.map((city) => {
                    const citieName = `${city} - ${estado.sigla}`
                    return city = {name:citieName,
                                   id: angular.lowercase(citieName.replace(/\s+/g, ''))
                    };
                });
            }).reduce((acc, val) => {
                return acc.concat(val);
            });

        }

        function loadCities() {
            let deffered = $q.defer();
            $.getJSON("./js/assets/estados-cidades.json", function (json) {
                let cities = setUpCities(json);
                deffered.resolve(cities);
            });
            return deffered.promise;
        }


    });
})();