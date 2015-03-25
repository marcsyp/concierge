angular.module('starter.controllers', [])

.controller('ReportCtrl', function($scope) {})

.controller('SearchCtrl', function($scope, $stateParams, Chats) {
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
