// Code encapusuled in a module githubViewer
(function() {


  // Just reference to githubViewer module
  var app = angular.module("githubViewer");

  // My controller
  // $routeParams this will give any parameters that are in the url
  var UserController = function($scope, github, $routeParams, $location) {

    var onUserComplete = function(data) {

      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

    // Add function to scope
    $scope.reportInfo = function(username, reponame){
      $location.path("/repo/" + username + "/" + reponame);
    };
    
    // Lets initialized my variable username in my scope
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);

}());