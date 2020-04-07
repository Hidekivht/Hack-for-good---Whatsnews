const cron = require('node-cron');
const sendNewsMessage = require('./sendNewsMessage');

const task = 
  cron.schedule('0 8 * * *', sendNewsMessage, {
    timezone: 'America/Sao_Paulo',
    scheduled: false,
  });

module.exports = task;