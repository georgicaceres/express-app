const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET home page. */
router.get('/', dogControllers.filter);

module.exports = router;
