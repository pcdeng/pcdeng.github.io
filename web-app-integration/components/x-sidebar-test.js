import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-sidebar', 'Integration | Component | x sidebar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-sidebar}}`);
  assert.equal(this.$('.sidebar-brand').text().trim(), 'Connections');

  let groups = [{
    TechnologyName: 'ddd',
    ConnectionType: 'first connection name'
  }, {
    TechnologyName: 'ccc',
    ConnectionType: 'fff'
  }];
  this.set('groups', groups);
  // Template block usage:
  this.render(hbs`{{#x-sidebar groups=groups}}{{/x-sidebar}}`);
  assert.equal(this.$('.group-connections').length, 2);

  assert.equal(this.$('.group-name:first').text().trim(), 'first connection name');
});
