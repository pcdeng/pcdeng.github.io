import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('x-alarms', 'Integration | Component | x alarms', {
  integration: true,
});

test('it renders', function (assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let alarmSample = [
    {
      Acknowledged: false,
      DisplayName: 'Services - Reporting Service Status',
      DrilldownLocation: 'SoSSE.SupportServicesTabs\\SoSSE.SupportServices_Status',
      ErrorCode: null,
      ErrorText: 'The SQL Server Reporting service is installed but not running',
      FirstRaised: '1476845617.395',
      ISO8601FirstRaisedUTC: '2016-10-19T02:53:37.395Z',
      InternalKey: null,
      Key: null,
      Keyword: 'sosse:Home.btnServices.SQLServerServiceStatus.Alarm',
      LastRaised: '1477300936.631',
      ISO8601LastRaisedUTC: '2016-10-24T09:22:16.631Z',
      Name: 'sqlserver_spotlight$reportingstatus',
      Occurrences: 1289,
      RequiresAcknowledgement: false,
      Severity: 'INFORMATION',
      Snoozed: false,
      SnoozedBy: null,
      SnoozedUntil: '0.000',
      ISO8601SnoozedUntilUTC: '1970-01-01T00:00:00.000Z',
      StorageKey: 'sqlserver_spotlight$reportingstatus^1476845617395',
      TimeConditionCleared: '0',
      ISO8601ConditionClearedUTC: '1970-01-01T00:00:00.000Z',
      Type: 'ALARM',
    },
    {
      Acknowledged: false,
      DisplayName: 'Monitored Server - SQL Server Collection Execution Failure',
      DrilldownLocation: null,
      ErrorCode: '6',
      ErrorText:
        "Collection 'Tempdb File Location' failed : Windows data is not available for the 'Tempdb File Location' collection.",
      FirstRaised: '1476845643.644',
      ISO8601FirstRaisedUTC: '2016-10-19T02:54:03.644Z',
      InternalKey: 'tempdbfilelocationcheck',
      Key: 'Tempdb File Location',
      Keyword: 'sosse:ProcedureExecutionFailure.alarm',
      LastRaised: '1477300165.695',
      ISO8601LastRaisedUTC: '2016-10-24T09:09:25.695Z',
      Name: 'sqlserver_spotlight$_sqlprocedureexecutionfailure@tempdbfilelocationcheck',
      Occurrences: 220,
      RequiresAcknowledgement: false,
      Severity: 'INFORMATION',
      Snoozed: false,
      SnoozedBy: null,
      SnoozedUntil: '0.000',
      ISO8601SnoozedUntilUTC: '1970-01-01T00:00:00.000Z',
      StorageKey: 'sqlserver_spotlight$_sqlprocedureexecutionfailure@tempdbfilelocationcheck^1476845643644',
      TimeConditionCleared: '0',
      ISO8601ConditionClearedUTC: '1970-01-01T00:00:00.000Z',
      Type: 'PROCEDURE',
    },
  ];

  let alarms = [];
  alarmSample.forEach(function (alarm) {
    let temp = Ember.Object.extend({
      id: alarm.StorageKey,
      Severity: alarm.Severity.capitalize(),
      FirstRaised: alarm.FirstRaised * 1000,
      IsBackToOverviewOfConn: true,
    });
    if (alarm.Snoozed) {
      temp.set('SnoozedUntil', alarm.SnoozedUntil * 1000);
    }
    alarms.push(temp);
  });

  this.set('alarms', alarms);

  this.render(hbs`{{#x-alarms alarms=alarms}}{{/x-alarms}}`);

  assert.equal(this.$('.alarm-row').length, 2);
});
