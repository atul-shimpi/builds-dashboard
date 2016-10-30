import {BaseController} from './base.controller';

function CityController(
  $scope,
  $state,
  $log,  
  WeatherService) {
  'ngInject';	
  
  
  BaseController.call(this, $scope, $state, $log, WeatherService);
  if ($state.params.city) {
    this.getWeatherByCity($state.params.city);
  } else {
    this.onGettingWeatherFailed('City is not specified');
  }
  
};

CityController.prototype = Object.create(BaseController.prototype);

export {CityController};