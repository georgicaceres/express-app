const dogService = require('../services/dogService');
const self = {};

self.filter = function(req, res, next) {
  let dogs = dogService.getFilterDogs(null, null, null);
  const imagesPerPage = 3;
  const page = req.params.page || 1;
  const numPages = Math.ceil(dogs.length/imagesPerPage);
  dogs = dogs.slice((page - 1) * imagesPerPage, (page * imagesPerPage))
  res.render('index', { dogs, numPages });
};

self.specificBreed = function(req, res, next) {
  let allBreed = dogService.getDogByBreed(req.params.breed);
  res.send(allBreed);
};

self.specificSize = function(req, res, next) {
  let allSize = dogService.getDogsBySize(req.params.size);
  res.send(allSize);
};

self.specificAge = function(req, res, next) {
  let allAge = dogService.getDogsByAge(req.params.age);
  res.send(allAge);
}


module.exports = self;
