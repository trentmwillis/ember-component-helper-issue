import DS from 'ember-data';

var NestedModel = DS.Model.extend({
  componentType: DS.attr('string')
});

NestedModel.reopenClass({
  FIXTURES: [{
    id: 1,
    componentType: 'test-component'
  }]
});

export default NestedModel;