angular.module('starter.controllers', [])

.controller('ReportCtrl', function($scope) {
	$scope.buttonClass = ['button-positive', 'button-positive', 'button-positive', 'button-positive', 'button-positive', 'button-positive']
	$scope.somethingSelected = false;
	var imageURLs = ['./img/floorplan0.jpg', './img/floorplan1.jpg', './img/floorplan2.jpg', './img/floorplan3.jpg', './img/floorplan4.jpg', './img/floorplan5.jpg']
	var sensorNames = ['', 'Temperature', 'Humidity', 'Noise', 'Light', 'Occupancy'];
	var sensorValues = ['', '69 deg', '45%', '59db', '384 lux', '87%'];
	$scope.selectedImage = imageURLs[0];
	$scope.selectSensor = function(index){
		if ($scope.selectedIndex == index) {
			$scope.selectedIndex = -1;
			$scope.somethingSelected = false;
			$scope.selectedImage = imageURLs[0];
			$scope.selectedSensorName = sensorNames[index];
			$scope.selectedSensorValue = sensorValues[index];
			$scope.buttonClass = ['button-positive', 'button-positive', 'button-positive', 'button-positive', 'button-positive', 'button-positive']
						

		} else {
			$scope.buttonClass = ['button-positive', 'button-positive', 'button-positive', 'button-positive', 'button-positive', 'button-positive']
			$scope.buttonClass[index] = 'button-energized';
			$scope.selectedIndex = index;
			console.log(index);
			$scope.selectedImage = imageURLs[index];
			$scope.selectedSensorName = sensorNames[index];
			$scope.selectedSensorValue = sensorValues[index];
			console.log($scope.selectedImage, $scope.selectedSensorName, $scope.selectedValue);	
			$scope.somethingSelected = true;
			
		}

	};
	$scope.howFeel = function() {
		console.log('alert me');
		alert('Select a sensor and tell us how you feel.');
	};
	$scope.frowny = function() {
		alert('Sorry to hear it. Trying searching for a better place.');
	};
	$scope.neutral = function() {
		alert("You're telling me this why?");
	};
	$scope.happy = function() {
		alert('Fantastic! Thanks for the feedback.');
	};


})

.controller('SearchCtrl', function($scope) {
	$scope.selectedImage = './img/results0.png';
	var imageURLs = ['./img/results3.png', './img/results1.png', './img/results2.png']
	

	$scope.data = {};
	$scope.data.temp = 69;
	$scope.data.hum = 45;
	$scope.data.vol = 59;
	$scope.data.light = 384;
	$scope.data.occupancy = 87;
	$scope.data.tempDiff = $scope.data.temp - 69; 
	$scope.selectionDiff = [$scope.temp, $scope.hum, $scope.data.vol, $scope.data.light, $scope.data.occupancy];
	console.log($scope.selectionDiff);

	$scope.show = function() {
		$scope.selectionDiff = [$scope.data.temp, $scope.data.hum, $scope.data.vol, $scope.data.light, $scope.data.occupancy];
	console.log($scope.selectionDiff);
	}
	$scope.search = function () {
		$scope.selectedImage = imageURLs[Math.floor((Math.random() * 3))];
		console.log($scope.selectedImage);
	}
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
