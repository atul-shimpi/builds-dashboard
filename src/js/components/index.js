import welcomeComponent from './welcome';
import permissionsComponent from './permissions';
import weatherDashboardComponent from './weatherDashboard';
import cityAndPostalCodeComponent from './cityAndPostalCode';

export default angular.module('weather.components', [
  welcomeComponent.name,
	permissionsComponent.name,
	weatherDashboardComponent.name,
  cityAndPostalCodeComponent.name
]);
