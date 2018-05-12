const path = require('path');
const axios = require('axios');
const adapterPath = path.join(
  path.dirname(require.resolve('axios')), 
  'lib/adapters/http'
);
const adapter = require(adapterPath);

axios.defaults.adapter = adapter;