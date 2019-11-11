const fs = require('fs');
const JSON5 = require('json5');
const configFile = JSON5.parse(fs.readFileSync('./config.json5'));
const config = {
  apiKey: process.env.API_KEY || configFile.apiKey,
  cellsServerBaseUrl: process.env.CELLS_SERVER_BASE_URL || configFile.cellsServerBaseUrl
};
module.exports = config;
