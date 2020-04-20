const express = require('express');
const OngContoller = require('./controllers/OngController');
const IncidentContoller = require('./controllers/IncidentController');
const ProfileContoller = require('./controllers/ProfileController');
const SessionContoller = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', SessionContoller.create);

routes.get('/ongs', OngContoller.index);
routes.post('/ongs', OngContoller.create);

routes.get('/profile', ProfileContoller.index);

routes.get('/incidents', IncidentContoller.index);
routes.post('/incidents', IncidentContoller.create);
routes.delete('/incidents/:id', IncidentContoller.delete);

module.exports = routes;