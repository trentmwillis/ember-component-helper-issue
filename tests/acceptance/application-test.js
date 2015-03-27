import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'component-helper-issue/tests/helpers/start-app';

var application;

module('Acceptance: Application', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
  });
});

test('visiting / again', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
  });
});
