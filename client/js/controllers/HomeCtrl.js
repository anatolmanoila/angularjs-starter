(function () {
  "use strict";

  angular.module('MyApp')
    .controller('HomeCtrl', ['$scope', function ($scope) {

		$scope.title = "Hey, welcome to HomePage !";
		$scope.description = function() {
			return  'this is my homepage, returned from fn';
		}



    }]);
})();
