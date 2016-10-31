class Build {
  constructor(type, id, owner, timeStarted, state, metrics, build, unitTest, functionalTest) {
    this.id = id;
    this.type = type;
    this.owner = owner;
    this.timeStarted = timeStarted;
    this.state = state;
    this.metrics = metrics;
    this.build = build;
    this.unitTest = unitTest;
    this.functionalTest = functionalTest;
  }
  
  isBuildItem() {
    return this.type === 'Build';
  }
  
  isFirewallItem(){
    return this.type === 'Firewall';
  }
}

var builds = [];

builds.push(new Build('Build', 'Tenrox-R1_1235', '', '', 'Pending'));
builds.push(new Build('Firewall', '432462', 'jtuck', '4/18/2014 12:12pm', 'Running'));
builds.push(new Build('Firewall', '432461', 'samy', '4/18/2014 10:53am', 'Rejected'));

builds.push(new Build('Build','Tenrox-R1_1234', '', '4/17/2014 9:42am', 'Complete'));
builds.push(new Build('Firewall', '432460', 'samy', '4/17/2014 7:51am', 'Rejected'));
builds.push(new Build('Firewall', '432459', 'samy', '4/16/2014 6:43am', 'Accepted'));

export {builds}