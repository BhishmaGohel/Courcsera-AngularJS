(function(){
'use strict';

angular.module('AppbyBhishma', [])

.controller('MyFirstController', function ($scope){
	$scope.name = "Bhishma";
	$scope.sayHello  = function(){
		return "Hello to user fom Bhishma";
	};
});

})();
