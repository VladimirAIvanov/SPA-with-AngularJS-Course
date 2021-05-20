(function() {
    'use strict';

    angular.module('data')
        .component('categoryList', {
            templateUrl: 'src/menu/templates/menu-list.template.html',
            bindings: {
                items: '<'
            }
        });
})();