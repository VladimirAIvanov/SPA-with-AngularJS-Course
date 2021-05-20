(function() {
    'use strict';

    angular.module('data')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService','list'];

    function CategoriesController(MenuDataService, list) {
        var categories = this;
        categories.list = list.data;

        /*MenuDataService.getAllCategories().then(function(response) {
                categories.list = response.data;
                //console.log(categories.list);
            })
            .catch(function(error) {
                console.log("Something went terribly wrong.");
            });*/
    }
})();