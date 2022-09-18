const axios = require('axios');
const axiosRetry = require('axios-retry');

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`********************** retryCount: ${retryCount}`);
    return retryCount * 1000;
  }
});

async function testTimeout() {
  try {
    const url = 'http://localhost:8081/timeout';
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await axios.get(url, config);
    console.log(response);
    return response;
  } catch (e) {
    console.error('exception occurred during GET', e);
    throw e;
  }
}

testTimeout();
