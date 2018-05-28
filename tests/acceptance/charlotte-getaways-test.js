import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | charlotte getaways', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /charlotte-getaways', async function(assert) {
    await visit('/charlotte-getaways');

    assert.equal(currentURL(), '/charlotte-getaways');
  });
});
