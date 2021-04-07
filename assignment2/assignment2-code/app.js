(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var items = this;
        //add new item
        items.itemName = "";
        items.itemQuantity = "";
        items.addItem = function () {
        	ShoppingListCheckOffService.add(items.itemName, items.itemQuantity);
        	console.log("Here");
        	console.log(items.itemName);
        }
        //show list
       items.list = ShoppingListCheckOffService.getToBuyItems();
       //buy item
       items.buy = function (index) {
       	ShoppingListCheckOffService.buyItem(index);
       }
       //delete item
       items.remove = function (index) {
       	ShoppingListCheckOffService.remove(index);
       }
    }

    AlreadyBoughtController.$inject = [`ShoppingListCheckOffService`];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        //show list
        bought.list = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        //this is service
        var service = this;
        // list of items to buy
        var toBuyItems = [
            { name: "Soft cookies", quantity: 15 },
            { name: "Dog food", quantity: 7 },
            { name: "Cake", quantity: 20 },
            { name: "Cookies", quantity: 7 },
            { name: "Coke", quantity: 20 },
            { name: "Toilet paper", quantity: 7 }
        ];
        // list of bought items
        var boughtItems = [];
        // add item to list
        service.add = function(itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            toBuyItems.push(item);
        }
        //remove item
        service.remove = function(itemIndex) {
            toBuyItems.splice(itemIndex, 1);
        }
        //get to buy items
        service.getToBuyItems = function() {
            return toBuyItems;
        }
        //get bought items
        service.getBoughtItems = function() {
            return boughtItems;
        }
        //Buy some item
        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];
            boughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        }
    }
})();