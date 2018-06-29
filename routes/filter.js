const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET filter panel. */
router.get('/', dogControllers.filter);

module.exports = router;
