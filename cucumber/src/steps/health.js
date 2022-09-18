/**
 * Cucumber steps for testing Book API health check.
 *
 * @author Indra Basak
 * @since Sep 18, 2022
 */
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
require('dotenv-flow').config();
const restHelper = require('../util/rest-helper');

Given('The Book API service is up', () => {
  console.log('Start - Book API service health check');
});

When('I send GET health request to {}', async (path) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  this.response = await restHelper.get(
    `${process.env.BOOK_API_URL}${path}`,
    config
  );
});

Then('I get response code {int} and health status {}', (code, status) => {
  assert.equal(this.response.status, code);
  assert.equal(this.response.data.status, status);
  console.log('End - Book API service health check is successful');
});
