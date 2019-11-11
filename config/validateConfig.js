const CONFIG_FILENAME = 'config.json5';
const config = require('./loadConfig');

const PRIZMDOC_CLOUD_CELLS_SERVER_BASE_URL = 'https://api.accusoft.com/cells';
const PLACEHOLDER_API_KEY = 'YOUR_API_KEY';

function notConfigured() {
  return config.cellsServerBaseUrl === PRIZMDOC_CLOUD_CELLS_SERVER_BASE_URL && config.apiKey === PLACEHOLDER_API_KEY;
}

async function validateConfig() {
  if (notConfigured()) {
    console.error(`ERROR: You need to edit ${CONFIG_FILENAME} to configure your connection to PrizmDoc Cells. If you're just getting started, you can use our hosted PrizmDoc Cloud service; all you need to do is configure your API key. Visit https://cloud.accusoft.com to sign up for an account and get an API key at no cost. See the README.md file for more information.`);
    process.exit(0);
  }
}

module.exports = validateConfig;
