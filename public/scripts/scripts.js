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

  $scope.showAll = function(){
    console.log('in showAll', $scope);
    $http({
      method: 'GET',
      url: '/all',
    }).then(function ( response ){
      console.log('back from server with:', response);
      petRoster = response.data;
      var petsView = angular.element(document.getElementById('petRosterView'));
      petsView.empty();
      for (var i = 0; i < petRoster.length; i++) {
        // first add blank strings where needed
        if (!(petRoster[i].name)){
          petRoster[i].name = '';
        }
        if (!(petRoster[i].species)){
          petRoster[i].species = '';
        }
        if (!(petRoster[i].age)){
          petRoster[i].age = '';
        }
        if (!(petRoster[i].image)){
          petRoster[i].image = '';
        }
        petsView.append('<tr><td>'+(i+1)+'</td><td>'+petRoster[i].name+
        '</td><td>'+petRoster[i].species+
        '</td><td>'+petRoster[i].age+
        '</td><td>'+petRoster[i].image+'</td></tr>');
      }
    });

  };// end showAll
  $scope.showAll();
}]);
