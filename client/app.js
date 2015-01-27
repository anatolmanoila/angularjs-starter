(function () {
  "use strict";

  angular.module('MyApp', ['ngRoute'])

	  //the config block runs only once when the app is starting up
    .config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
 		$routeProvider.when('/', {
			controller:'HomeCtrl',
			templateUrl:'templates/home.html'
      	});
		$routeProvider.when('/info', {
			controller:'InfoCtrl',
		  	templateUrl:'templates/info.html'
		});
		$routeProvider.otherwise('/', {});
      //$locationProvider.html5Mode(true);
    }])

	  .constant('VERSION', '1.0')

	  .run(['VERSION', '$rootScope', function(VERSION, $rootScope) {
		  //explicitly define which parameters are being injected
		  console.log($rootScope);
		  console.log(VERSION);
	  }]);

})();