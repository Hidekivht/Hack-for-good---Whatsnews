const axios = require('axios');

const api = axios.create({
  baseURL: 'https://newsapi.org/v2'
});

module.exports = api;