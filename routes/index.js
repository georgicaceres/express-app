const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET home page. */
router.get('/', dogControllers.all);

module.exports = router;
