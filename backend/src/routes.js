const express = require('express');

const NewsController = require('./controllers/NewsController');
const FakeNewsController = require('./controllers/FakeNewsController');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();

routes.get('/news', NewsController.index);
routes.post('/news', NewsController.create);

routes.get('/fakenews', FakeNewsController.index);

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);

module.exports = routes