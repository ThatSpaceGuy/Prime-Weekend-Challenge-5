console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///

var myApp = angular.module('myApp',["ngRoute"]);

var petRoster = [];

/// == Function Declarations == ///


/// == JavaScript == ///

myApp.config(["$routeProvider",function($routeProvider){
  $routeProvider.
    when("/home", {
      templateUrl: "/views/partials/home.html",
      controller: "homeController"
    }).
    when("/add", {
      templateUrl: "/views/partials/add.html",
      controller: "addController"
    }).
    when("/pets", {
      templateUrl: "/views/partials/pets.html",
      controller: "petsController"
    }).
    otherwise({
      redirectTo: "/home"
    });
}]);


myApp.controller('mainController', ['$scope','$http',function($scope,$http){
  console.log('NG');

}]);
