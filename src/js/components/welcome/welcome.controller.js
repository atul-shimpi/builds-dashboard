function WelcomeController($scope,
                           $state,
                           $log) {
    'ngInject';
	
	$scope.onClickGetWeather = function(){
	  $state.go('permissions');
	}	
}

export {WelcomeController};
