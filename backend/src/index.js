const express = require('express');
const routes = require('./routes');
const cron = require('./utils/nodeCron');

const app = express();

cron.start();
app.use(express.json());

app.use(routes);

app.listen(3333);