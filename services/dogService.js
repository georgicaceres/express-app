const service = {};
const dogs = [
{name: "Gus & Hank", breed:"Akita", size: "Small", age: 2, image: "akita.jpg", heart: "far"},
{name: "Apollo", breed:"Akita", size: "Large", age: 6, image: "akita1.jpg", heart: "far"},
{name: "Bo", breed:"Akita", size: "Small", age: 1, image: "akita2.jpg", heart: "far"},
{name: "Jasper" , breed:"Akita", size: "Medium", age: 3, image: "akita3.jpg", heart: "far"},
{name: "Coco", breed: "Beagle", size: "Small", age: 4, image: "beagle.jpg", heart: "far"},
{name: "Milo", breed: "Beagle", size: "Small", age: 5, image: "beagle1.jpg", heart: "far"},
{name: "Max", breed:"Boxer", size: "Medium", age: 2, image: "boxer.jpg", heart: "far"},
{name: "Murphy", breed:"Boxer", size: "Large", age: 4, image: "boxer1.jpg", heart: "far"},
{name: "Oliver", breed:"Boxer", size: "Medium", age: 7, image: "boxer2.jpg", heart: "far"},
{name: "Jax & Luke", breed:"Chihuahua", size: "Small", age: 5, image: "chihuahua.jpg", heart: "far"},
{name: "Mirna", breed:"Chihuahua", size: "Small", age: 7, image: "chihuahua1.jpg", heart: "far"},
{name: "Roisin", breed:"Chihuahua", size: "Small", age: 11, image: "chihuahua2.jpg", heart: "far"},
{name: "Mara", breed:"Chihuahua", size: "Small", age: 4, image: "chihuahua3.jpg", heart: "far"},
{name: "Frankie", breed:"Chihuahua", size: "Small", age: 6, image: "chihuahua4.jpg", heart: "far"},
{name: "Xena", breed:"Chihuahua", size: "Small", age: 4, image: "chihuahua5.jpg", heart: "far"},
{name: "Brutus", breed: "Chow-chow", size: "Large", age: 9, image: "chow-chow.jpg", heart: "far"},
{name: "Rufus", breed: "Chow-chow", size: "Large", age: 7, image: "chow-chow1.jpg", heart: "far"},
{name: "Babe & Ruth", breed: "Chow-chow", size: "Small", age: 3, image: "chow-chow2.jpg", heart: "far"},
{name: "Blondie", breed: "Chow-chow", size: "Large", age: 4, image: "chow-chow3.jpg", heart: "far"},
{name: "Babar", breed: "Chow-chow", size: "Medium", age: 7, image: "chow-chow4.jpg", heart: "far"},
{name: "Donald", breed: "Chow-chow", size: "Small", age: 3, image: "chow-chow5.jpg", heart: "far"},
{name: "Hoshi", breed: "Chow-chow", size: "Small", age: 2, image: "chow-chow6.jpg", heart: "far"},
{name: "Abby", breed: "Collie", size: "Medium", age: 7, image: "collie.jpg", heart: "far"},
{name: "Jake", breed: "Collie", size: "Large", age: 10, image: "collie1.jpg", heart: "far"},
{name: "Annie", breed: "Collie", size: "Large", age: 10, image: "collie2.jpg", heart: "far"},
{name: "Winston", breed: "Collie", size: "Medium", age: 6, image: "collie3.jpg", heart: "far"},
{name: "Rudy", breed: "Fox Terrier", size:"Small", age: 7, image: "fox-terrier.jpg", heart: "far"},
{name: "Cody", breed: "Fox Terrier", size:"Small", age: 4, image: "fox-terrier1.jpg", heart: "far"},
{name: "Archie", breed: "Golden Retriever", size: "Small", age: 2, image: "golden-retriever.jpg", heart: "far"},
{name: "Jan, Dean, Jasmin, Kiara & Lenny", breed: "Golden Retriever", size: "Large", age: 9, image: "golden-retriever1.jpg", heart: "far"},
{name: "Calvin", breed: "Golden Retriever", size: "Medium", age: 11, image: "golden-retriever2.jpg", heart: "far"},
{name: "Zulu", breed: "Great Dane", size: "Small", age: 2, image: "great-dane.jpg", heart: "far"},
{name: "Batman", breed: "Great Dane", size: "Large", age: 5, image: "great-dane1.jpg", heart: "far"},
{name: "Donny", breed: "Great Dane", size: "Large", age: 7, image: "great-dane2.jpg", heart: "far"},
{name: "Tango", breed: "Great Dane", size: "Medium", age: 7, image: "great-dane3.jpg", heart: "far"},
{name: "Emmy", breed: "Great Dane", size: "Large", age: 8, image: "great-dane4.jpg", heart: "far"},
{name: "Kodo", breed: "Komondor", size: "Medium", age: 8, image: "komondor.jpg", heart: "far"},
{name: "Bruno", breed: "Komondor", size: "Large", age: 10, image: "komondor1.jpg", heart: "far"},
{name: "Ginger", breed: "Komondor", size: "Large", age: 12, image: "komondor2.jpg", heart: "far"},
{name: "Romulus", breed: "Kuvasz", size: "Large", age: 7, image: "kuvasz.jpg", heart: "far"},
{name: "Suri", breed: "Maltese", size: "Small", age: 6, image: "maltese.jpg", heart: "far"},
{name: "Lisa", breed: "Maltese", size: "Small", age: 7, image: "maltese1.jpg", heart: "far"},
{name: "Bootsie", breed: "Pomsky", size: "Small", age: 5, image: "pomsky.jpg", heart: "far"},
{name: "Kiwi", breed: "Pomsky", size: "Small", age: 9, image: "pomsky1.jpg", heart: "far"},
{name: "Timon & Pumba", breed: "Pug", size: "Small", age: 3, image: "pug.jpg", heart: "far"},
{name: "Sheriff", breed: "Pug", size: "Small", age: 5, image: "pug1.jpg", heart: "far"},
{name: "Sugar & Spice", breed: "Pug", size: "Small", age: 7, image: "pug2.jpg", heart: "far"},
{name: "Jedi & Yoda", breed: "Pug", size: "Small", age: 5, image: "pug3.jpg", heart: "far"},
{name: "Darwin", breed: "Pug", size: "Medium", age: 11, image: "pug4.jpg", heart: "far"}];

service.getAllDogs = function() {
    return dogs;
};

service.getFilterDogs = function(breed, size, age) {
    return dogs
        .filter(dog => !breed || dog.breed === breed)
        .filter(dog => !size || dog.size === size)
        .filter(dog => !age || age.split(",").indexOf(String(dog.age)) >= 0 )
    }

service.getFavorites = function() {
    return dogs
        .filter(dog => dog.heart === "fas");
};

service.getDetailOf = function(name) {
    return dogs.find(dog => dog.name === name);
};

service.likeDog = function(image) {
    let index = dogs.findIndex(dog => dog.image === image );
    dogs[index].heart = "fas";
};

service.unlikeDog = function(image) {
    let index = dogs.findIndex(dog => dog.image === image );
    dogs[index].heart = "far";
};

module.exports = service;

// const breeds = [{
//   name: "Akita",
//   description: "The Akita is a big, bold dog with a distinctly powerful appearance: a large head in contrast to small, triangular eyes; and a confident, rugged stance. The mere presence of a powerful Akita serves as a deterrent to most who would cause trouble. This breed is renowned for unwavering loyalty to his owners, and he can be surprisingly sweet and affectionate with family members. Imagine a loving protector who will follow you from room to room, whose entire mission in life seems to be simply to serve you."
// }, {
//   name: "Beagle",
//   description: "Beagles are active companions for kids and adults alike. Canines in this dog breed are merry and fun loving, but being hounds, they can also be stubborn and require patient, creative training techniques. Their noses guide them through life, and they’re never happier than when following an interesting scent."
// }, {
//   name: "Boxer",
//   description: "Boxers are large, muscular, square-headed dogs who look imposing — that is, until you look into their eyes and see the mischief and joy of life reflected there. Because of their playful nature and boundless energy, they are sometimes called the 'Peter Pan' of the dog breeds. Boxers aren't considered fully mature until they are three years old, meaning they have one of the longest puppyhoods in the world of dogs. The typical Boxer is intelligent, alert, and fearless, yet friendly."
// }, {
//   name: "Chihuahua",
//   description: "He’s all dog, fully capable of competing in dog sports such as agility and obedience, and is among the top 10 watchdogs recommended by experts. He loves nothing more than being with his people and requires a minimum of grooming and exercise."
// }, {
//   name: "Chow-chow",
//   description: "With his deep-set eyes and large head, accentuated by a mane of hair, the Chow Chow (Chow for short) is an impressive-looking dog. His looks might make you think he's mean or ill-tempered, but a well-bred and well-raised Chow isn't aggressive. Instead, it's said that the Chow combines the nobility of a lion, the drollness of a panda, the appeal of a teddybear, the grace and independence of a cat, and the loyalty and devotion of a dog."
// }, {
//   name: "Collie",
//   description: "Is an extremely intelligent, sensitive dog who is known for her uncanny ability to know when something is wrong. True stories abound about this breed coming to the rescue of people and animals. Heroics aside, the Collie is a medium-size dog, easy to train, devoted to and protective of her family, and friendly with people outside the family circle as well. Known for being playful and gentle, she makes an excellent companion for children."
// }, {
//   name: "Fox Terrier",
//   description: "Fox Terriers are canine classics who've changed little since their emergence in the late 18th century. There are two types: Smooth Fox Terriers are sleek, elegant, and intelligent, while Wire Fox Terriers are handsome, happy, and quite stylish when groomed properly. Called Fox Terriers or Foxys for short, both are outgoing, active, and inquisitive, with a devil-may-care attitude. They live in the moment, enjoying whatever's going on."
// }, {
//   name: "Golden Retriever",
//   description: "The Golden Retriever is one of the most popular dog breeds in the U.S. The breed’s friendly, tolerant attitude makes him a fabulous family pet, and his intelligence makes him a highly capable working dog. Golden Retrievers excel at retrieving game for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs. They’re also natural athletes, and do well in dog sports such as agility and competitive obedience."
// }, {
//   name: "Great Dane",
//   description: "Oh, baby! A Great Dane is truly a great dog breed — large and noble, commonly referred to as a gentle giant or as the “Apollo of dogs.” Apollo is the Greek god of the sun, the brightest fixture in the sky. The Great Dane certainly holds stature in the dog world; but though he looks terribly imposing, in reality he’s one of the best-natured dogs around. For all of his size, a Great Dane is a sweet, affectionate pet. He loves to play and is gentle with children."
// }, {
//   name: "Komondor",
//   description: "His appearance might make you think he was developed to mop floors, but the Komondor has a long and noble heritage as a flock-guarding dog breed in his native Hungary. He still retains a strong protective instinct and will defend his family and property with his life."
// }, {
//   name: "Kuvasz",
//   description: "The Kuvasz is a large, white flock-guarding dog who hails from Hungary. A one-family dog, he’s protective of his people and suspicious of strangers. The Kuvasz thinks for himself and can be challenging to train."
// }, {
//   name: "Maltese",
//   description: "A dog breed who’s gentle and fearless, the Maltese greets everyone as a friend. His glamorous white coat gives him a look of haughty nobility, but looks can be deceiving. This is a sprightly, vigorous dog who excels not only as a companion but also as a therapy dog and competitor in such dog sports as agility, obedience, rally, and tracking. But most of all, he loves to be with his people."
// }, {
//   name: "Pomsky",
//   description: "The Pomsky is a designer breed of dog that is a hybrid of the Pomeranian and the Siberian Husky. Cute, silly, and suited for apartment life, the Pomsky is a dog that likes to be the center of attention, and with their adorable looks and playful antics, they often get the adoration they crave."
// }, {
//   name: "Pug",
//   description: "Pugs often are described as a lot of dog in a small space. These sturdy, compact dogs are known as the clowns of the canine world because they have a great sense of humor and like to show off. Originally bred to be a lap dog, the Pug thrives on human companionship."
// }]
