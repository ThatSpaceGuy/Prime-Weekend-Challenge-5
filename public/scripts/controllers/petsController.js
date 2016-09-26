myApp.controller("petsController", ["$scope", "$http", function($scope, $http){
  console.log("Pets view!");

  $scope.showAll = function(){
    console.log('in showAll', $scope);
    $http({
      method: 'GET',
      url: '/all',
    }).then(function ( response ){
      console.log('back from server with:', response);
      $scope.petRoster = response.data;
      // var petsView = angular.element(document.getElementById('petRosterView'));
      // petsView.empty();
      // for (var i = 0; i < $scope.petRoster.length; i++) {
      //   var thisPet = $scope.petRoster[i];
      //   var petName = thisPet.name;
      //   var petSpecies = thisPet.species;
      //   var petAge = thisPet.age;
      //   var petImage = thisPet.image;
      //
      //   // first add blank strings where needed
      //   if (!(petName)){
      //     petName = '';
      //   }
      //   if (!(petSpecies)){
      //     petSpecies = '';
      //   }
      //   if (!(petAge)){
      //     petAge = '';
      //   }
      //   if (!(petImage)){
      //     petImage = '';
      //   }
      //   petsView.append('<tr><td>'+(i+1)+'</td><td>'+petName+'</td><td>'+
      //     petSpecies+'</td><td>'+petAge+'</td><td>'+petImage+'</td></tr>');
      // }
    });

  };// end showAll
  $scope.showAll();
}]);
