const dogService = require('../services/dogService');
const self = {};

self.unlike = function(req, res, next) {
  let image = req.body.id;
  dogService.unlikeDog(image);
  res.send(200)
};

module.exports = self;
