const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET users listing. */
router.get('/', dogControllers.filter);

module.exports = router;
