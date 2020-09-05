(function(){
	'use strict';

	angular.module('model1Index1', [])
	.controller('model1IndexController', Model1Controller);

	Model1Controller.$inject = ['$scope'];
	//CalculateNumericForString.$inject = ['string']
	function Model1Controller($scope){
		$scope.string = "";
		$scope.message = "";
		$scope.displayNumeric = function(){
			var totalNameValue = CalculateNumericForString($scope.string);
			$scope.message = totalNameValue;
		};
	}

	function CalculateNumericForString(string) {
			var totalStringValue = 0;
			var totalmessage = "";
			
			for (var i = 0; i < string.length ; i++){
				if(string.charCodeAt(i) == 44){
					totalStringValue += 1;
				}
			}
			if(string.length == 0){
				totalmessage = "Please enter data first";
			}else if(totalStringValue < 3){
				totalmessage = "Enjoy!";
			}else{
				totalmessage = "Too much!";
			}

		return totalmessage;		
	}	
})();
