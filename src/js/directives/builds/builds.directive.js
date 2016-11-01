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
                  <div class="columns">      
                    <span class="build-type">&nbsp;</span>                  
                    <span class="column">Changelist/Build</span>
                    <span class="column">Owner</span>
                    <span class="column">Timestarted</span>
                    <span class="column">State</span>
                    <span class="column">Metrics</span>
                    <span class="column">Build</span>
                    <span class="column">Unit Test</span>
                    <span class="column">Functional Test</span>
                  </div>
                   
                  <div class="rows">
                    <div                       
                      class="table-row"
                      ng-repeat="build in builds"
                      ng-click='$ctrl.buildClick(build.id)'
                      ng-class="{'table-row-expanded': $ctrl.isBuildSelected(build.id)}"> 
                      
                      <span class="build-type {{build.state}} fa fa-desktop" aria-hidden="true"                      
                        ng-if=build.isBuildItem()>
                      </span>
                      
                      <span class="build-type {{build.state}} fa fa-fire" aria-hidden="true"                       
                        ng-if=build.isFirewallItem()>
                      </span>
                    
                        <span class="field {{build.state}}">{{build.id}}</span>  
                        <span class="field {{build.state}}">{{build.owner}}</span>
                        <span class="field {{build.state}}">{{build.timeStarted}}</span>  
                        <span class="field {{build.state}}">{{build.state}}</span>   
                        
                        <span 
                          class="field fa fa-circle {{build.metrics.status}}" aria-hidden="true">
                        </span> 
                        
                        <span 
                          class="field fa fa-circle {{build.env.status}}" aria-hidden="true">
                        </span> 

                        <span 
                          class="field fa fa-circle {{build.unitTest.status}}" aria-hidden="true">
                        </span> 

                        <span 
                          class="field fa fa-circle {{build.functionalTest.status}}" aria-hidden="true">
                        </span>  
                        
                        <div 
                          class="info-container"
                          ng-if=$ctrl.isBuildSelected(build.id)>
                          
                          <div class="info-button">
                          </div>
                          
                          <div class="info-button">
                          </div>
                          
                          <div class="info-button">
                          </div>
                          
                          <div class="info-button">
                          </div>
                        </div>
                                                
                    </div>
                  </div>
                </div>
              `
   };
}

export {buildsDirective};