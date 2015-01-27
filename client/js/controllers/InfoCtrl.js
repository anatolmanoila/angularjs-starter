(function () {
  "use strict";

  angular.module('MyApp')
    .controller('InfoCtrl', ['$scope', function($scope) {

	$scope.title = "Welcome to InfoPage !";
	$scope.description = function() {
		return  'this is the info page' + 12;
	}

    }]);
})();
