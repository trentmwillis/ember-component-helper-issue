import DS from 'ember-data';

var TestModel = DS.Model.extend({
  nested: DS.belongsTo('nested-model', {async: true})
});

export default TestModel;
