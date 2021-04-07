import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sql-server', 'Integration | Component | sql server', {
  integration: true,
});

test('it renders', function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  let connection = {
    DiagnosticServerID: 122323,
    ConnectionName: 'connection name',
  };
  this.set('connection', connection);
  this.render(hbs`{{#sql-server connection=connection}}{{/sql-server}}`);
  let target = this.$('#svgobj');
  assert.equal(target.attr('id'), 'svgobj');
  assert.equal(target.attr('type'), 'image/svg+xml');
});
