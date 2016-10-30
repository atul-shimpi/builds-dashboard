function WeatherService($resource, $q, $filter) {
  'ngInject';
	
  var resource, baseUrl, defaults, actions;

  baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
  defaults = { appid: '9a1762d699d1fd388877654865fde34f' };
  actions = {};

  resource = $resource(baseUrl, defaults, actions);
  
  resource.queryByLatLong = function (lat, long_) {
    return this.get({
        lat: lat,
        lon: long_
        }).$promise.then(      
            function(data) { //success
              return buildWeather(data);
            },
            function(data){ //failure
              return $q.reject(data);;
            }
        );
  };   
  
  resource.queryByCityName = function (cityName) {
    return this.get({q: cityName}).$promise.then(      
            function(data) { //success
              return buildWeather(data);
            },
            function(data){ //failure
              return $q.reject(data);;
            }
          );
  };   
	
  resource.queryPostalCode = function (postalCode) {
    return this.get({zip: postalCode}).$promise.then(      
            function(data) { //success
              return buildWeather(data);
            },
            function(data){ //failure
              return $q.reject(data);;
            }
          );
  };   
  
  function buildWeather(data) {
    return  {
      date: new Date(),
      city: data.name,
      description: data.weather[0].description,
      iconUrl: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
      temperature: $filter('number')(data.main.temp/10, 2),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind: data.wind.speed
	  };  
  };
  
  return resource;
}

export {WeatherService};
