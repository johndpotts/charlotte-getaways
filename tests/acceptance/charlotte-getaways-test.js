import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | charlotte getaways', function(hooks) {
  setupApplicationTest(hooks);


  test('should show getaways as the home page', async function (assert) {
   });

   test('should link to information about the project.', async function (assert) {
   });

   test('should link to contact information.', async function (assert) {
   });

   test('should list all getaways.', async function (assert) {
   });

   test('should filter the list of getaways by distance.', async function (assert) {
   });

   test('should show details for a selected getaway', async function (assert) {
   });

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
