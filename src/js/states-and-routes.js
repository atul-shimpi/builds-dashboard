export default  function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');  
	
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'src/views/home/home.html',
		    controller: 'HomeController'
    });	  
}; 
    
routeConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];    
