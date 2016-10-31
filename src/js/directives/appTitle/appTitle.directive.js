function appTitleDirective() {
  'ngInject';
   return {
    restrict: 'E',
    scope: {},
    replace: false,
    templateUrl: './src/views/appTitle/title.html'
   };
}

export {appTitleDirective};
