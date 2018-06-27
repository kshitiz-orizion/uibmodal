angular.module('app', [
  'ui.bootstrap'
])

.controller('ctrl', function ($scope, $uibModal,userService) {
  'use strict';
  
  $scope.openModal = function () {
    userService.setter($scope.user);
    $uibModal.open({
      templateUrl: 'modal.html',
      controller: function ($scope, $uibModalInstance,userService) {
        $scope.newuser=userService.getter();
        $scope.ok = function () {
          
          $uibModalInstance.close();
        };
      
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    })
  };
})

.service('userService',function(){
  var useraData={};

  return{
    getter:function(){
      return userData;
    },
    setter:function(x){
      userData=x;
    }
  }
})