import appTitleDirective from './appTitle';
import appMenuDirective from './appMenu';

export default angular.module('myDirectives', [
	appTitleDirective.name,
  appMenuDirective.name
]);
