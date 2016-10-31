import appTitleDirective from './appTitle';
import pageTitleDirective from './pageTitle';

export default angular.module('myDirectives', [
	appTitleDirective.name,
  pageTitleDirective.name
]);
