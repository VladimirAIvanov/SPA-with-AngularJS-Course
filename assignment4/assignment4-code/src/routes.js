(function() {
    'use strict';

    angular.module('data')
        .config(RoutesConf);

    RoutesConf.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConf($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })

            // Category page
            .state('menu', {
                url: '/menu',
                templateUrl: 'src/menu/templates/categories.template.html',
                controller: 'CategoriesController as catList',
                resolve: {
                    list: ['MenuDataService', function(MenuDataService) {
                        //console.log(MenuDataService.getAllCategories());
                        return MenuDataService.getAllCategories();
                    }]
                }

            })

            //Items page
            .state('items', {
                url: '/items',
                templateUrl: 'src/menu/templates/items.template.html',
                controller: 'ItemsController as itemsCtrl',
                params: {
                    itemShort: null
                }
            })

            //Category Details
            .state('menu.details', {
                templateUrl: 'src/menu/templates/Item-detail.template.html',
                controller: 'DetailController as itemDetail',
                params: {
                    itemId: null
                }
            })

            //Item Details
            .state('items.details', {
                templateUrl: 'src/menu/templates/Item-detail.template.html',
                controller: 'DetailController as itemDetail',
                params: {
                    itemId: null
                }
            });




    }

})();