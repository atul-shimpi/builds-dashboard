import appTitleDirective from './appTitle';
import pageTitleDirective from './pageTitle';
import buildsDirective from './builds';

export default angular.module('myDirectives', [
	appTitleDirective.name,
  pageTitleDirective.name,
  buildsDirective.name
]);
