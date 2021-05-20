(function() {
    'use strict';

    angular.module('data')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', '$filter', 'list'];

    function DetailController($stateParams, $filter, list) {
        var itemDetails = this;
        console.log(list);
        
        var item =  $filter('filter')(list.data,{'id': $stateParams.itemId});
        itemDetails.name = item[0].name;
        itemDetails.shortName = item[0].short_name;

        if ($stateParams.itemId <=100) {
            itemDetails.spec = item[0].special_instructions;

        } else {

            itemDetails.description = item[0].description;
            itemDetails.LargePortion = item[0].large_portion_name;
            itemDetails.LargePrice = item[0].price_large;
            itemDetails.SmallPortion = item[0].small_portion_name;
            itemDetails.SmallPrice = item[0].price_small;
        }
    }
})();