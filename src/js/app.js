import styles from "../scss/app.scss";
import services from './services';
import components from './components';
import directives from './directives';
import statesAndRoutes from './states-and-routes'

var app = angular.module('weatherApp', [
  'ui.router',
  'ngResource',
  services.name,
  components.name,
  directives.name
]); 

app.config(statesAndRoutes);


export default app;