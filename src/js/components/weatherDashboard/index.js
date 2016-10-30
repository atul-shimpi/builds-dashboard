import {weatherDirective} from './weather.directive';
import {LatLongController} from './latLong.controller';
import {CityController} from './city.controller';

export default angular.module('weatherDashboard', [])
  .controller('LatLongController', LatLongController)
	.directive('weather', weatherDirective)
  .controller('CityController', CityController)
;