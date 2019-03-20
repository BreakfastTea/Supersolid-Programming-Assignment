const express = require('express');
const router = express.Router();
const controller = require('../controllers/getScores.controller');

router.get('/getScores', controller.getScores);

module.exports = router;
