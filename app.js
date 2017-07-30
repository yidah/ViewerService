(function() {

  var app = angular.module("githubViewer", ["ngRoute"]);

  // when: the url is recognised or otherwise when url is not 
  app.config(function($routeProvider) {
    $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/user/:username", {
          templateUrl: "user.html",
          controller: "UserController"
        })
        .when("/repo/:username/:reponame", {
          templateUrl: "repo.html",
          controller: "RepoController"
        })
        .otherwise({redirectTo:"/main"});

  });

}());