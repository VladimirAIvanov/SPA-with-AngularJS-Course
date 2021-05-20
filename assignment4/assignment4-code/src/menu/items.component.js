(function() {
    'use strict';

    angular.module('data')
        .component('itemList', {
            templateUrl: 'src/menu/templates/menu-list.template.html',
            bindings: {
                items: '<'
            }
        });
})();