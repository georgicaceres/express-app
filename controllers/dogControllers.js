const dogService = require('../services/dogService');
const self = {};
const imagesPerPage = 3;

self.filter = function(req, res, next) {
    let breeds = dogService.getBreeds();
    let dogs = dogService.getFilterDogs(req.query.breed, req.query.size, req.query.age, req.query.favorite === 'true');
    const page = parseInt(req.query.page) || 1;
    const numPages = Math.ceil(dogs.length / imagesPerPage);
    dogs = dogs.slice((page - 1) * imagesPerPage, (page * imagesPerPage));
    if (dogs.length > 0) {
        res.render('filter', { active: 'filter', breeds, dogs, numPages, page });
    } else {
        res.render('empty', {active: 'filter', message: "Sorry, there is no match. Try another filter!"})
    }
};

self.all = function(req, res, next) {
    let dogs = dogService.getAllDogs();
    const page = parseInt(req.query.page) || 1;
    const numPages = Math.ceil(dogs.length/imagesPerPage);
    dogs = dogs.slice((page - 1) * imagesPerPage, (page * imagesPerPage));
    res.render('index', {active: 'homepage', dogs, numPages, page });
}

self.favorites = function(req, res, next) {
    let dogs = dogService.getFavorites();
    const page = parseInt(req.query.page) || 1;
    const numPages = Math.ceil(dogs.length/imagesPerPage);
    dogs = dogs.slice((page - 1) * imagesPerPage, (page * imagesPerPage));
    if (dogs.length > 0) {
        res.render('index', {active: 'favorites',dogs, numPages, page });
    } else {
        res.render('empty', {active: 'favorites', message: "Sorry, there is no favorites yet. Try choosing yours from the list!"})
    }
};

self.getDetailOf = function(req, res, next) {
    let dog = dogService.getDetailOf(req.params.dog);
    res.render('detail', {dog})
}

module.exports = self;
