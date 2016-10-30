function PermissionsController($scope,
                           $state,
                           $log) {
    'ngInject';
	
	$scope.onClickYes = function(){
	  $state.go("weather-by-lat-long");
	};
	
	$scope.onClickNoThanks = function(){
	  $state.go("city-and-postal-code");
	};    
    	
}

export {PermissionsController};