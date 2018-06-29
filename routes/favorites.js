const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET favorites list. */
router.get('/', dogControllers.favorites);

module.exports = router;
