const dogService = require('../services/dogService');
const self = {};
const imagesPerPage = 3;

self.filter = function(req, res, next) {
    let dogs = dogService.getFilterDogs(req.query.breed, req.query.size, req.query.age);
    const page = parseInt(req.query.page) || 1;
    const numPages = Math.ceil(dogs.length/imagesPerPage);
    dogs = dogs.slice((page - 1) * imagesPerPage, (page * imagesPerPage));
    if (dogs.length > 0) {
        res.render('index', { dogs, numPages, page });
    } else {
        res.render('empty', {message: "Sorry, there is no match. Try another filter!"})
    }
};

self.favorites = function(req, res, next) {
    let dogs = dogService.getFavorites();
    const page = parseInt(req.query.page) || 1;
    const numPages = Math.ceil(dogs.length/imagesPerPage);
    dogs = dogs.slice((page - 1) * imagesPerPage, (page * imagesPerPage));
    if (dogs.length > 0) {
        res.render('index', { dogs, numPages, page });
    } else {
        res.render('empty', {message: "Sorry, there is no favorites yet. Try choosing yours!"})
    }
};

self.getDetailOf = function(req, res, next) {
    let dog = dogService.getDetailOf(req.params.dog);
    res.render('detail', {dog})
}


module.exports = self;
