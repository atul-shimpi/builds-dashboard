import {builds} from './data'

class BuildsController {
  constructor($scope) {    
    this.$scope = $scope;                                
    this.initialize()
  }    
  
  initialize() {
    // colums
    this.$scope.buildColumns = ['ChangeList/Build', 'Owner', 'Time Started', 'State',
                               'Metrics', 'Build', 'Unit Test', 'Functional Test'];   
    
    // dummy build data    
    this.$scope.builds = builds; 
  }
  
  buildClick(id) {
      this.selectedBuildId = id;
  }
    
  isBuildSelected(id) {
    return this.selectedBuildId === id;
  }
}

function buildsDirective() {
  'ngInject';
   return {
    restrict: 'E',
    scope: {},
    replace: false,
    controller: BuildsController,
    controllerAs: '$ctrl',
    template: `
                <div class="builds">
                <table class="table">
                  <tr class="columns">
                    <th></th>
                    <th>Change List/Build</th>
                    <th>Owner</th> 
                    <th>Time started</th>
                    <th>State</th> 
                    <th>Metrics</th>
                    <th>Build</th> 
                    <th>Unit Test</th>
                    <th>Functional Test</th>                    
                  </tr> 
                  
                  <tr class="table-row {{build.state}}"
                    ng-repeat="build in builds"
                    ng-click='$ctrl.buildClick(build.id)'
                    ng-class="{'table-row-expanded': $ctrl.isBuildSelected(build.id)}"                    
                  >             
                    <td class="fa fa-desktop" aria-hidden="true" 
                        ng-classx="{'{{build.state}}': true}"
                        ng-if=build.isBuildItem()>
                    </td>
                    
                    <td class="fa fa-fire" aria-hidden="true" 
                        ng-classx="{'{{build.state}}': true}"
                        ng-if=build.isFirewallItem()>
                    </td>
                    
                    <td>{{build.id}}</td>
                    <td>{{build.owner}}</td>
                    <td>{{build.timeStarted}}</td>
                    <td ng-classx="{'{{build.state}}': true}">{{build.state}}</td> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                     
                  </tr>                  
                </table>
                </div>
              `
   };
}

export {buildsDirective};