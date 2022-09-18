/**
 * A helper to make REST calls.
 *
 * @author Indra Basak
 * @since Sep 18, 2022
 */
const axios = require('axios');

async function post(url, data, config) {
  try {
    return axios.post(url, data, config);
  } catch (e) {
    console.error('exception occurred during POST', e);
    throw e;
  }
}

async function get(url, config) {
  try {
    console.log(url);
    const response = await axios.get(url, config);
    console.log(response);
    return response;
  } catch (e) {
    console.error('exception occurred during GET', e);
    throw e;
  }
}

module.exports = { post, get };
