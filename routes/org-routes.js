// INITIALIZE EXPRESS, ROUTER & CONTROLLER.
const express = require('express')
const orgRoutes = express.Router();
const orgsController = require('../controllers/org-controller');
const axios = require('axios');

//ADD GET ID's
orgRoutes.get('/', orgsController.index);
orgRoutes.get('/stats', orgsController.statIndex);
orgRoutes.post('/org-info', orgsController.getData);
orgRoutes.post('/data', orgsController.getData);

module.exports = orgRoutes;
