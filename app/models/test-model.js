import DS from 'ember-data';

var TestModel = DS.Model.extend({
  nested: DS.belongsTo('nested-model', {async: true})
});

TestModel.reopenClass({
  FIXTURES: [{
    id: 1,
    nested: 1
  }]
});

export default TestModel;
