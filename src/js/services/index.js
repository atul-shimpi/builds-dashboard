import {WeatherService} from './weatherService';

export default angular.module('services', [])    
    .factory('WeatherService', WeatherService)
;