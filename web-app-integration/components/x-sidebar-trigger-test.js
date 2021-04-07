import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-sidebar-trigger', 'Integration | Component | x sidebar trigger', {
  integration: true,
});

test('it renders', function (assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-sidebar-trigger}}`);
  assert.equal(this.$('.sidebar-toggle-btn').length, 1);
});
