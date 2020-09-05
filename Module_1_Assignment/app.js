(function() {
    `use strict`;

    angular.module('isEnought', [])
        .controller('isEnoughtControler', isEnoughtControler);

    isEnoughtControler.$inject = ['$scope', '$filter'];

    function isEnoughtControler($scope, $filter) {
        $scope.listOfMeals = "";
        $scope.masage = "";

        $scope.check = function() {
        	var howManyFoods = numbersOfFood($scope.listOfMeals);
        	if (howManyFoods<=3 && howManyFoods>0) {
        		$scope.masage = "Enjoy!";
        	} else if (howManyFoods>3) {
        		$scope.masage = "Too much!";
        	} else {
        		$scope.masage = "Please enter correct data first";
        	}
            
        }
    }

    function numbersOfFood(foods) {
        if (foods == "") {
            return 0;
        }
        var nOfFoods = foods.split(',').filter(Boolean); // No empty strings
        return nOfFoods.length;
    }
})();