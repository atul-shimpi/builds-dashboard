function appTitleDirective() {
  'ngInject';
   return {
    restrict: 'E',
    scope: {},
    replace: false,
    templateUrl: './src/views/title/title.html'
   };
}

export {appTitleDirective};
