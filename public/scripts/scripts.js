console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///

var myApp = angular.module('myApp',[]);

var allPets = [];

/// == Function Declarations == ///


/// == JavaScript == ///

myApp.controller('mainController', ['$scope','$http',function($scope,$http){
  console.log('NG');

  $scope.addPet = function(){
    console.log('in addPet', $scope.newPet);

    var newObject = {
      // title: $scope.newPet
      petName: 'Test Name',
      petSpecies: 'Test Species',
      petAge: 3,
      petImage: 'http://devjana.net/pi/pets/abby.jpg'
    }; // end new pet
    console.log('sending:',newObject);
    // test send via http to post Route
    $http({
      method: 'POST',
      url: '/create',
      data: newObject
    }).then(function ( response ){
      console.log('back from server with:', response);
    });

    allPets.push(newObject);
    console.log('allPets:', allPets);
  }; // end addPet

  $scope.addPet();
}]);
