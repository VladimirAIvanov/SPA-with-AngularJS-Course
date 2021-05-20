(function() {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService','$stateParams'];

    function ItemsController(MenuDataService, $stateParams) {
        var items = this;
        var ShortName = $stateParams.itemShort;

        MenuDataService.getItemsForCategory(ShortName).then(function(response) {
                items.list = response.data.menu_items;
                //consolse.log(items.list);
            })
            .catch(function(error) {
                console.log("Something went terribly wrong.");
            });
    }

})();