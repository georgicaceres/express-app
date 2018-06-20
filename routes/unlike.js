const express = require('express');
const router = express.Router();
const unlikeController = require('../controllers/unlikeController');

/* POST home page. */
router.post('/', unlikeController.unlike);

module.exports = router;
