const path = require('path');

const { NODE_ENV } = process.env;
const extension = NODE_ENV === 'test' ? `.test` : '';

if (NODE_ENV !== 'production') {
  // Load .env variables
  require('dotenv').config({
    path: path.resolve(__dirname, `../.env${extension}`),
  });
}
