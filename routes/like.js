const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

/* POST for like a dog. */
router.post('/', favoriteController.like);

module.exports = router;
