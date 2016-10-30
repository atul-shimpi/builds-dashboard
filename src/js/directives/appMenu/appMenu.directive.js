function appMenuDirective() {
  'ngInject';
   return {
    restrict: 'E',
    scope: {},
    replace: false,
    templateUrl: './src/views/menu/menu.html'
   };
}

export {appMenuDirective};