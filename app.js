(function () {
'use strict';

angular.module('activity1App', [])
.controller('activityController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.fullString = "";
  $scope.message = "";


  $scope.checkItems = function () {
    var items = $scope.fullString.split(',');


    if ($scope.fullString == "") {
      $scope.message = "Error: You must insert at least one element";
    } else if(items.length <= 3) {
      $scope.message = "Enjoy!!!"
    }else{
      $scope.message = "Too much!!!"
    }


  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}




})();
