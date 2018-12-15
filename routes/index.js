const express = require('express'),
    Index = require('../controllers/Index');

const index = express.Router(),
    ctrl = new Index();

index.get('/', (...args) => ctrl.index(...args));

module.exports = index;