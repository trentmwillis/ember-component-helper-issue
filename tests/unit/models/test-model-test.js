import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('test-model', {
  // Specify the other units that are required for this test.
  needs: ['model:nested-model']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
