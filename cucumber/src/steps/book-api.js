/**
 * Cucumber steps for testing Book API service endpoints.
 *
 * @author Indra Basak
 * @since Sep 18, 2022
 */
const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require('assert').strict;
require('dotenv-flow').config();
const restHelper = require('../util/rest-helper');

setDefaultTimeout(60 * 1000);

Given('A {}', async (book) => {
  console.log('Start - Book API service create book');
  this.book = JSON.parse(book);
});

When('I send POST request to {}', async (path) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  this.response = await restHelper.post(
    `${process.env.BOOK_API_URL}${path}`,
    this.book,
    config
  );
  console.log(this.response);
});

Then('I get create response code {int}', async (code) => {
  assert.equal(this.response.status, code);
  assert.equal(this.response.data.name, this.book.name);
  this.id = this.response.data.id;

  console.log('END - Book API service create book successful');
});

Then('I send GET request to {}', async (path) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const url = `${process.env.BOOK_API_URL}${path}${this.id}`;

  this.response = await restHelper.get(url, config);
});

Then('I get status response code {int}', async (code) => {
  assert.equal(this.response.status, code);
  assert.equal(this.response.data.id, this.id);
  assert.equal(this.response.data.name, this.book.name);

  console.log('END - SAGE get request successful');
});
