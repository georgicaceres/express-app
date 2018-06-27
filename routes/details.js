const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET home page. */
router.get('/:dog', dogControllers.getDetailOf);

module.exports = router;
