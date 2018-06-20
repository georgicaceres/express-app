const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

/* POST home page. */
router.post('/', likeController.like);

module.exports = router;
