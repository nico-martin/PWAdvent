const preact = require('preact');
const withPreact = require('next-plugin-preact');
const app = require('./app.json');

require('dotenv').config();

module.exports = withPreact({
  experimental: {
    modern: true,
  },
  env: {
    REGISTER_SW: process.env.GENERATE_SW === 'true',
    TODAY: JSON.stringify(process.env.TODAY) || null,
    API_BASE: JSON.stringify(
      process.env.API_BASE || 'https://api.pwadvent.dev/'
    ),
    API_KEY: JSON.stringify(process.env.API_KEY) || null,
    APP_TITLE: JSON.stringify(app.title) || '',
    APP_DESCRIPTION: JSON.stringify(app.description) || '',
  },
});
