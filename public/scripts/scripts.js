console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///

var myApp = angular.module('myApp',[]);

var petRoster = [];

/// == Function Declarations == ///


/// == JavaScript == ///

myApp.controller('mainController', ['$scope','$http',function($scope,$http){
  console.log('NG');

  $scope.petRoster = petRoster;

  $scope.addPet = function(){
    console.log('in addPet', $scope.nameIn);

    var newObject = {
      // title: $scope.newPet
      petName: $scope.nameIn,
      petSpecies: $scope.speciesIn,
      petAge: $scope.ageIn,
      petImage: $scope.imageIn
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
    $scope.showAll();
  }; // end addPet

  $scope.showAll = function(){
    console.log('in showAll', $scope);
    $http({
      method: 'GET',
      url: '/all',
    }).then(function ( response ){
      console.log('back from server with:', response);
      $scope.petRoster = response.data;
      var petsView = angular.element(document.getElementById('petRosterView'));
      petsView.empty();
      for (var i = 0; i < $scope.petRoster.length; i++) {
        var thisPet = $scope.petRoster[i];
        var petName = thisPet.name;
        var petSpecies = thisPet.species;
        var petAge = thisPet.age;
        var petImage = thisPet.image;

        // first add blank strings where needed
        if (!(petName)){
          petName = '';
        }
        if (!(petSpecies)){
          petSpecies = '';
        }
        if (!(petAge)){
          petAge = '';
        }
        if (!(petImage)){
          petImage = '';
        }
        petsView.append('<tr><td>'+(i+1)+'</td><td>'+petName+'</td><td>'+
          petSpecies+'</td><td>'+petAge+'</td><td>'+petImage+'</td></tr>');
      }
    });

  };// end showAll
  $scope.showAll();
}]);
