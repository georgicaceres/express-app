const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

/* POST for unlike a dog. */
router.post('/', favoriteController.unlike);

module.exports = router;
