'use strict';
(function () {
    var app = angular.module('estayApp');

    app.controller("HomeController", function HomeController($state, HelperService) {

        var homeCtrl = this;
        homeCtrl.querySearch = querySearch;
        homeCtrl.goToCity = goToCity;
        const STATE_CITY = "estay.city";

        HelperService.loadCities().then(
            function (response) {
                homeCtrl.cities = response;
            }
        );


        function goToCity(city){
            console.log(city);
            $state.go(STATE_CITY, {id: city.id});
        }

        function querySearch(query) {
            let results = query ? homeCtrl.cities.filter(createFilterFor(query)) : homeCtrl.cities,
                deferred;
            return results; 
        }

        /**
     * Create filter function for a query string
     */
        function createFilterFor(query) {
            let lowercaseQuery = angular.lowercase(query.replace(/\s+/g, ''));

            return function filterFn(state) {
                return (state.id.indexOf(lowercaseQuery) === 0);
            };

        }

    });
})();