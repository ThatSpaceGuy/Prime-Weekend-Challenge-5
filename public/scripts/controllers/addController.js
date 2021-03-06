myApp.controller("addController", ["$scope", "$http", function($scope, $http){
  console.log("Add a pet here!");

  var infoBox = angular.element(document.getElementById('addInfoDiv'));

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
    }); // end http

    infoBox.empty();
    infoBox.append(newObject.petName+' added successfully!');

  }; // end addPet
}]);
