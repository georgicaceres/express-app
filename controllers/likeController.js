const dogService = require('../services/dogService');
const self = {};

self.like = function(req, res, next) {
  let image = req.body.id;
  dogService.likeDog(image);
  res.send(200)
};

module.exports = self;
