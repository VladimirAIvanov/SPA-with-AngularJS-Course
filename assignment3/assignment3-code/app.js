// browser-sync start --server --directory -- files "**.*"
(function() {
    'use strict'

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .service('GetPromise', GetPromise)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItems() {
        var ddo = {
            templateUrl: 'menuitems.html',
            scope: {
                items: '=',
                onRemove: '&'
            },
            controller: foundItemsController,
            bindToController: true,
            controllerAs: 'itemsList'
        };

        return ddo
    }

    function foundItemsController() {
        var list = this;
    }

    NarrowItDownController.$injekt = ['MenuSearchService']

    function NarrowItDownController(MenuSearchService) {
        var items = this;

        items.search = function() {
            var word = items.forSearch || "";

            var r = MenuSearchService.getMatchedMenuItems(word);

            r.then(function(response) {
                    items.found = response.data.menu_items;
                })
                .catch(function(error) {
                    console.log("Something went terribly wrong.");
                });
        };



        items.removeItem = function(itemIndex) {
            items.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['GetPromise'];

    function MenuSearchService(GetPromise) {
        var service = this;

        service.getMatchedMenuItems = function(word) {

            var foundItems = GetPromise.get();

            foundItems.then(function(response) {
                    var data = response.data;

                    for (var i = 0; i < data.menu_items.length; i++) {
                        var description = data.menu_items[i].description;
                        if (description.toLowerCase().indexOf(word) == -1) {
                            data.menu_items.splice(i, 1);
                            i--;
                        };
                    }
                    //console.log(data.menu_items);

                    return data.menu_items;
                })
                .catch(function(error) {
                    console.log("Something went terribly wrong.");
                });
            return foundItems;
        };
    }

    GetPromise.$inject = ['$http', 'ApiBasePath'];

    function GetPromise($http, ApiBasePath) {
        var service = this;

        service.get = function() {
            var result = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            });
            return result;
        };
    }

})()