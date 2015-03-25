angular.module('starter.controllers', [])

.controller('ReportCtrl', function($scope) {
	var imageURLs = ['./img/floorplan1.png', './img/floorplan2.png', './img/floorplan3.png', './img/floorplan4.png', './img/floorplan5.png']
	$scope.selectedImage = imageURLs[0];
	$scope.selectSensor = function(index){
		console.log(index);
		$scope.selectedImage = imageURLs[index];
		console.log($scope.selectedImage);	
	}
})

.controller('SearchCtrl', function($scope, $stateParams, Chats) {
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
