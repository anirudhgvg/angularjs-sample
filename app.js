(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
    $scope.dishes = ""; 
    $scope.message = ""; 
    $scope.msgColor="green"

    $scope.check = function () {        
        var ndishes = $scope.dishes.trim();
        if(ndishes.length < 1)
            $scope.message = "";
        ndishes = ndishes.split(',');    
        if(ndishes.length <= 3) {
            $scope.message = "Enjoy!";
            $scope.msgColor="green";
        }            
        else if(ndishes.length > 3) {
            $scope.message = "Too much!";
            $scope.msgColor = "red";
        }
            
    };
});


})();
