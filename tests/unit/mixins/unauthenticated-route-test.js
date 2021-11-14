import EmberObject from '@ember/object';
import UnauthenticatedRouteMixin from 'app-test/mixins/unauthenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | unauthenticated-route', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let UnauthenticatedRouteObject = EmberObject.extend(UnauthenticatedRouteMixin);
    let subject = UnauthenticatedRouteObject.create();
    assert.ok(subject);
  });
});
