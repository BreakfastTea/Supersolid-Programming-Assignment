const express = require('express');
const router = express.Router();
const controller = require('../controllers/submitEntry.controller');

router.post('/submitEntry', controller.submit);

module.exports = router;
