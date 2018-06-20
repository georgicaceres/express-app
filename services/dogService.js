const service = {};
const dogs = [
{breed:"Akita", size: "Large", age: 2, image: "akita.jpg", heart: "far"},
{breed:"Akita", size: "Large", age: 6, image: "akita1.jpg", heart: "far"},
{breed:"Akita", size: "Large", age: 1, image: "akita2.jpg", heart: "far"},
{breed:"Akita", size: "Large", age: 3, image: "akita3.jpg", heart: "far"},
{breed: "Beagle", size: "Small", age: 4, image: "beagle.jpg", heart: "far"},
{breed: "Beagle", size: "Small", age: 5, image: "beagle1.jpg", heart: "far"},
{breed:"Boxer", size: "Medium", age: 2, image: "boxer.jpg", heart: "far"},
{breed:"Boxer", size: "Medium", age: 4, image: "boxer1.jpg", heart: "far"},
{breed:"Boxer", size: "Medium", age: 7, image: "boxer2.jpg", heart: "far"},
{breed:"Chihuahua", size: "Small", age: 5, image: "chihuahua.jpg", heart: "far"},
{breed:"Chihuahua", size: "Small", age: 7, image: "chihuahua1.jpg", heart: "far"},
{breed:"Chihuahua", size: "Small", age: 11, image: "chihuahua2.jpg", heart: "far"},
{breed:"Chihuahua", size: "Small", age: 4, image: "chihuahua3.jpg", heart: "far"},
{breed:"Chihuahua", size: "Small", age: 6, image: "chihuahua4.jpg", heart: "far"},
{breed:"Chihuahua", size: "Small", age: 4, image: "chihuahua5.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 9, image: "chow-chow.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 7, image: "chow-chow1.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 3, image: "chow-chow2.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 4, image: "chow-chow3.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 7, image: "chow-chow4.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 3, image: "chow-chow5.jpg", heart: "far"},
{breed: "Chow-chow", size: "Large", age: 2, image: "chow-chow6.jpg", heart: "far"},
{breed: "Collie", size: "Medium", age: 7, image: "collie.jpg", heart: "far"},
{breed: "Collie", size: "Medium", age: 10, image: "collie1.jpg", heart: "far"},
{breed: "Collie", size: "Medium", age: 10, image: "collie2.jpg", heart: "far"},
{breed: "Collie", size: "Medium", age: 6, image: "collie3.jpg", heart: "far"},
{breed: "Fox Terrier", size:"Small", age: 7, image: "fox-terrier.jpg", heart: "far"},
{breed: "Fox Terrier", size:"Small", age: 4, image: "fox-terrier1.jpg", heart: "far"},
{breed: "Golden Retriever", size: "Medium", age: 2, image: "golden-retriever.jpg", heart: "far"},
{breed: "Golden Retriever", size: "Medium", age: 9, image: "golden-retriever1.jpg", heart: "far"},
{breed: "Golden Retriever", size: "Medium", age: 11, image: "golden-retriever2.jpg", heart: "far"},
{breed: "Great Dane", size: "Large", age: 2, image: "great-dane.jpg", heart: "far"},
{breed: "Great Dane", size: "Large", age: 5, image: "great-dane.jpg", heart: "far"},
{breed: "Great Dane", size: "Large", age: 7, image: "great-dane.jpg", heart: "far"},
{breed: "Great Dane", size: "Large", age: 7, image: "great-dane.jpg", heart: "far"},
{breed: "Great Dane", size: "Large", age: 8, image: "great-dane.jpg", heart: "far"},
{breed: "Komondor", size: "Large", age: 8, image: "komondor.jpg", heart: "far"},
{breed: "Komondor", size: "Large", age: 10, image: "komondor.jpg", heart: "far"},
{breed: "Komondor", size: "Large", age: 12, image: "komondor.jpg", heart: "far"},
{breed: "Kuvasz", size: "Large", age: 7, image: "kuvasz.jpg", heart: "far"},
{breed: "Maltese", size: "Small", age: 6, image: "maltese.jpg", heart: "far"},
{breed: "Maltese", size: "Small", age: 7, image: "maltese1.jpg", heart: "far"},
{breed: "Pomsky", size: "Small", age: 5, image: "pomsky.jpg", heart: "far"},
{breed: "Pomsky", size: "Small", age: 9, image: "pomsky1.jpg", heart: "far"},
{breed: "Pug", size: "Small", age: 3, image: "pug.jpg", heart: "far"},
{breed: "Pug", size: "Small", age: 5, image: "pug1.jpg", heart: "far"},
{breed: "Pug", size: "Small", age: 7, image: "pug2.jpg", heart: "far"},
{breed: "Pug", size: "Small", age: 5, image: "pug3.jpg", heart: "far"},
{breed: "Pug", size: "Small", age: 11, image: "pug4.jpg", heart: "far"}];

service.getAllDogs = function() {
  return dogs;
};

service.getFilterDogs = function(breed, size, age) {
  return dogs
    .filter(dog => !breed || dog.breed === breed)
    .filter(dog => !size || dog.size === size)
    .filter(dog => !age || age.split(",").indexOf(dog.age) >= 0 )
}

service.likeDog = function(image) {
  let index = dogs.findIndex(dog => dog.image === image );
  dogs[index].heart = "fas";
}

service.unlikeDog = function(image) {
  let index = dogs.findIndex(dog => dog.image === image );
  dogs[index].heart = "far";
}

service.getDogByBreed = function(breed) {
  return dogs.find(dog => dog.breed === breed);
};

service.getDogsBySize = function(size) {
  return dogs.filter(dog => dog.size === size);
};

service.getDogsByAge = function(age) {
  return dogs.filter(dog => dog.age >= age);
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
