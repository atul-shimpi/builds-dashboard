import {appTitleDirective} from './appTitle.directive';

export default angular.module('appTitle', [])
    .directive('appTitle', appTitleDirective)
;