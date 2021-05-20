(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('BasePath', "https://davids-restaurant.herokuapp.com/");



    MenuDataService.$inject = ['$http', 'BasePath']

    function MenuDataService($http, BasePath) {
        var service = this;


        service.getAllCategories = function() {
            var catUrl = "categories.json";
            return GetPromise(catUrl);
        };

        service.getItemsForCategory = function(categoryShortName) {
            var itemsUrl = "menu_items.json?category=";
            return GetPromise(itemsUrl,categoryShortName);
        };

        function GetPromise(specUrl, shortName) {
            var urlGoal;

            if (shortName) {
                urlGoal = (BasePath + specUrl + shortName);
            } else {
                urlGoal = (BasePath + specUrl);
            }

            var result = $http({
                method: "GET",
                url: urlGoal
            });

            //console.log(result);
            return result
        }

    }

})();