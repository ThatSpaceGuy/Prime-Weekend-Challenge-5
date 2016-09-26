myApp.controller("petsController", ["$scope", "$http", function($scope, $http){
  console.log("Pets view!");

  var petRoster = [];

  $scope.showAll = function(){
    console.log('in showAll', $scope);
    $http({
      method: 'GET',
      url: '/all',
    }).then(function ( response ){
      console.log('back from server with:', response);
      // assign database results to petRoster so that ng-repeat can display
      $scope.petRoster = response.data;
      // save to global for deleting purposes
      petRoster = $scope.petRoster;
    });
  };// end showAll

  $scope.deletePet = function(requestedID){
    console.log('in deletePet', $scope);

    var recordNum = Number(requestedID);
    console.log(recordNum);
    var idToDelete = {
      id: petRoster[recordNum]._id
    };
    console.log(idToDelete);

    $http({
      method: 'DELETE',
      url: '/delete',
      data: idToDelete,
      headers: {"Content-Type": "application/json;charset=utf-8"}
    }).then(function ( response ){
      console.log('back from server with:', response);
    });
    $scope.showAll();
  }; // end delete Item

  $scope.showAlpha = function(direction){
    console.log('in showAlpha with:', direction);
    var urlString;

    if (direction==='D'){
      urlString = '/sortD';
    } else {
      urlString = '/sortA';
    }

    $http({
      method: 'GET',
      url: urlString,
    }).then(function ( response ){
      console.log('back from server with:', response);
      // assign database results to petRoster so that ng-repeat can display
      $scope.petRoster = response.data;
      // save to global for deleting purposes
      petRoster = $scope.petRoster;
    });
  };// end showAll

  // Show all database results immediately
  $scope.showAll();
}]);
