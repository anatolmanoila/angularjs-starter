(function () {
  "use strict";

  angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl:'templates/home.html',
          controller:'HomeCtrl'
        })
        .otherwise('/', {});
      //$locationProvider.html5Mode(true);
    }]);
})();