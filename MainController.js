// Code encapusuled in a module githubViewer
(function() {

  // Just reference to githubViewer module
  var app = angular.module("githubViewer");

  // My controller
  //  $location tells us what url we are on if we want to read the url for some reason and
  //  tells the location service to move us somewhere else
  var MainController = function($scope, $interval, $location) {

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;
    var startCountdown = function() {

      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown)
    };

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      //tells the location service to move us somewhere else
      $location.path("/user/" + username);
    };

    // Lets initialized my variable username in my scope
    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
  };

  app.controller("MainController", MainController);

}());