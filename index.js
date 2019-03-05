require('source-map-support/register');
require('@babel/register')({ extensions: ['.ts', '.js', '.json'] });
require('./src');
