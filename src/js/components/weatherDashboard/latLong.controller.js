import {BaseController} from './base.controller';

function LatLongController(
  $scope,
  $state,
  $log,  
  WeatherService) {
  'ngInject';	
  
  BaseController.call(this, $scope, $state, $log, WeatherService);
  
  if(navigator.geolocation) {
    //navigator.geolocation.getCurrentPosition(this.getWeatherByLatLong, $scope.onGettingWeatherFailed);  
    navigator.geolocation.getCurrentPosition(this.getWeatherByLatLong.bind(this), this.onGettingWeatherFailed);
  } else {
    $scope.onGettingWeatherFailed('Geolocation is not supported by this browser.');
  }   
}

LatLongController.prototype = Object.create(BaseController.prototype);

export {LatLongController};