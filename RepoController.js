(function() {

  var app = angular.module("githubViewer");

  var RepoController = function($scope, github, $routeParams) {

    var onRepoDetailsComplete = function(data) {

       console.log(data.open_issues_count)
       console.log(data.contributors_url)

      $scope.openIssues = data.open_issues_count;
      github.getContributors(data.contributors_url).then(onContributors, onError);
    };

    var onContributors = function(data) {
      $scope.contributors = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

    // Lets initialized my variable in my scope
    $scope.openIssues = 0 ;
    $scope.username = $routeParams.username;

    github.getRepoDetails($routeParams.username, $routeParams.reponame).then(onRepoDetailsComplete, onError);
    
  };

  app.controller("RepoController", RepoController);

}());