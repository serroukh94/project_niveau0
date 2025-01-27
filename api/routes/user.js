'use strict'

const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();
const md_auth = require('../middlewares/authenticated');


api.get('/home', UserController.home);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);


module.exports = api;