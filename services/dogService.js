const service = {};
const fs = require('fs');

const breeds = ["Akita", "Beagle", "Boxer", "Chihuahua", "Chow-Chow", "Collie",
    "Fox Terrier", "Golden Retriever", "Great Dane", "Komondor", "Kuvassz", "Maltese", "Pomsky", "Pug"];

//-------- Read dogs json file when start the server ---------
const dogs = JSON.parse(fs.readFileSync(__dirname + '/dogs.json', 'utf8'));

//-------------- Get array of breeds ---------------
service.getBreeds = function() {
    return breeds;
};

//-------------- Get all dogs ---------------
service.getAllDogs = function() {
    return dogs;
};

//-------------- Get filter dogs ---------------
service.getFilterDogs = function(breed, size, age, favorite) {
    return dogs
        .filter(dog => !breed || dog.breed === breed)
        .filter(dog => !size || dog.size === size)
        .filter(dog => !age || age.split(",").indexOf(String(dog.age)) >= 0 )
        .filter(dog => !favorite || dog.heart === "fas")
};

//-------------- Get favorites dogs ---------------
service.getFavorites = function() {
    return dogs
        .filter(dog => dog.heart === "fas");
};

//-------------- Get the detail of a dog ---------------
service.getDetailOf = function(name) {
    return dogs.find(dog => dog.name === name);
};

//-------------- Like a dog ---------------
service.likeDog = function(image) {
    let index = dogs.findIndex(dog => dog.image === image );
    dogs[index].heart = "fas";
};

//-------------- Unlike a dog ---------------
service.unlikeDog = function(image) {
    let index = dogs.findIndex(dog => dog.image === image );
    dogs[index].heart = "far";
};

module.exports = service;
