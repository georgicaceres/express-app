const express = require('express');
const router = express.Router();
const dogControllers = require('../controllers/dogControllers');

/* GET details of a specific dog. */
router.get('/:dog', dogControllers.getDetailOf);

module.exports = router;
