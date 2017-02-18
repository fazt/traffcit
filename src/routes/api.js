import express from 'express';
const router = express.Router();

import api from '../controllers/api';

router.get('/diskspace', api.diskspace);
router.get('/uptime', api.uptime);
router.get('/Incidences', api.incidences);
router.get('/incidencesData', api.incidencesData);
router.get('/lastuser', api.lastuser);
router.get('/users', api.users);
router.get('/currentuser', api.currentUser);

export default router;
