import './styles.scss';

function weatherDirective() {
  'ngInject';

  return {
    restrict: 'E',
      replace: false,
      template: `
        <div>  
          
          
				  <div class="dashboard_wall">                
				    	<span ng-if="gettingWeatherInProgress" class="dashboard_progress">
 				        Getting weather.....<i class="fa fa-spinner fa-spin"></i>               
              </span>
              
              <span ng-if="anyError" class="dashboard_error">
 				        Opps...encountered some issues while fetching weather...                               
              </span
              
              <p></p>
              <span ng-if="anyError" class="dashboard_error_desc">
              {{errDesc}}                               
              </span> 
              
              
              
				      <div>
              <span ng-if="gotWeather" class="dashboard_city">              
				       {{weather.city}}, 
              </span>	              
              
              <span ng-if="gotWeather" class="dashboard_date">              
				       {{weather.date | date : "medium"}} 
              </span>	
          </div>              
            
			    </div>
          
                    
          <div ng-if="gotWeather" class="dashboard_wall">               
				    <span class="dashboard_weather_description">
 				        Right now "{{weather.city}}" is having {{weather.description}}
                <img ng-src="{{gotWeather ? weather.iconUrl : ''}}"></img>
              </span>             
			    </div>	         
        
        <div ng-if="gotWeather" class="dashboard_wall">
        <div class="col-xs-12 col-sm-6 col-lg-3"">
            <div class="dashboard-stats__item bg-orange">
              <i class="fa fa-sun-o"></i>
              <h4 class="dashboard-stats__title">
                <span>{{weather.temperature}}</span> 
                <small>Temperature</small>
              </h4>
            </div>
            
          </div>
          
          
          <div ng-if="gotWeather" class="col-xs-12 col-sm-6 col-lg-3">

            <div class="dashboard-stats__item bg-pink">
             <i class="fa fa-globe"></i>
              <h3 class="dashboard-stats__title">
                <span>{{weather.humidity}}</span> 
                <small>Humidity</small>
              </h3>
            </div>            
          </div>
          
          <div ng-if="gotWeather" class="col-xs-12 col-sm-6 col-lg-3"">
          <div class="dashboard-stats__item bg-accent">
             <i class="fa fa-sun-o"></i>
              <h3 class="dashboard-stats__title">
                <span>{{weather.wind}}</span> 
                <small>Wind</small>
              </h3>
            </div>
          </div>
          
          <div ng-if="gotWeather" class="col-xs-12 col-sm-6 col-lg-3"">

            <div class="dashboard-stats__item bg-teal">
             <i class="fa fa-comments"></i>
              <h3 class="dashboard-stats__title">
                <span>{{weather.pressure}}</span>
                <small>Pressure</small>
              </h3>
            </div>
            
          </div>
          </div>
          
          <div class="dashboard_wall">
              <span>
              Do you want to try another city or postal code ? 
              <button 
    type="button" 
	  class = "btn btn-sm btn-success"
	  
	  ng-click="onClickYes();">
	  Yes
  </button>              
              </span> 
              </div>
      `
  };

}

export {weatherDirective};
