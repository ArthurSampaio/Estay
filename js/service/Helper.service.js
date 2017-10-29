'use strict';
(() => {
    var app = angular.module('estayApp');

    /**
     * Muitas coisas não implementadas de maneira bacana pois no nomento do desenvolvimento os recursos eram escassos.
     */

    app.service('HelperService', function ($q) {

        var service = this;
        service.loadCities = loadCities;
        service.getInfoForCity = getInfoForCity;


        function setUpCities(states, functionTo) {

            return states.estados.map((estado) => {
                return estado.cidades.map((city) => {
                    const citieName = `${city} - ${estado.sigla}`;
                    return {
                        name: citieName,
                        id: generateId(citieName)
                    };
                });
            }).reduce((acc, val) => {
                return acc.concat(val);
            });

        }


        function getInfoForCity(id_city) {
            let deffered = $q.defer();
            
            loadCities().then(
                function (response) {
                    loadCities().then(
                        function (response) {
                            response.map((item) => {
                                if(item.id === id_city) {
                                    deffered.resolve(item);
                                }
                            })
                        })
                }
            )
            console.log(deffered.resolve)
            return deffered.promise;
        }

        function loadCities() {
            let deffered = $q.defer();
            $.getJSON("./js/assets/estados-cidades.json", function (json) {
                let cities = setUpCities(json);
                deffered.resolve(cities);
            });
            return deffered.promise;
        }

        function generateId(str) {
            return angular.lowercase(str.replace(/\s+/g, '')); 
        }

    });
})();