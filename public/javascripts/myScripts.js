var currentPage = 1;
const imagesPerPage = 3;
const dogs = [
{breed:"Akita", size: "Large", age: 2, image: "akita.jpg"},
{breed:"Akita", size: "Large", age: 6, image: "akita1.jpg"},
{breed:"Akita", size: "Large", age: 1, image: "akita2.jpg"},
{breed:"Akita", size: "Large", age: 3, image: "akita3.jpg"},
{breed: "Beagle", size: "Small", age: 4, image: "beagle.jpg"},
{breed: "Beagle", size: "Small", age: 5, image: "beagle1.jpg"},
{breed:"Boxer", size: "Medium", age: 2, image: "boxer.jpg"},
{breed:"Boxer", size: "Medium", age: 4, image: "boxer1.jpg"},
{breed:"Boxer", size: "Medium", age: 7, image: "boxer2.jpg"},
{breed:"Chihuahua", size: "Small", age: 5, image: "chihuahua.jpg"},
{breed:"Chihuahua", size: "Small", age: 7, image: "chihuahua1.jpg"},
{breed:"Chihuahua", size: "Small", age: 11, image: "chihuahua2.jpg"},
{breed:"Chihuahua", size: "Small", age: 4, image: "chihuahua3.jpg"},
{breed:"Chihuahua", size: "Small", age: 6, image: "chihuahua4.jpg"},
{breed:"Chihuahua", size: "Small", age: 4, image: "chihuahua5.jpg"},
{breed: "Chow-chow", size: "Large", age: 9, image: "chow-chow.jpg"},
{breed: "Chow-chow", size: "Large", age: 7, image: "chow-chow1.jpg"},
{breed: "Chow-chow", size: "Large", age: 3, image: "chow-chow2.jpg"},
{breed: "Chow-chow", size: "Large", age: 4, image: "chow-chow3.jpg"},
{breed: "Chow-chow", size: "Large", age: 7, image: "chow-chow4.jpg"},
{breed: "Chow-chow", size: "Large", age: 3, image: "chow-chow5.jpg"},
{breed: "Chow-chow", size: "Large", age: 2, image: "chow-chow6.jpg"},
{breed: "Collie", size: "Medium", age: 7, image: "collie.jpg"},
{breed: "Collie", size: "Medium", age: 10, image: "collie1.jpg"},
{breed: "Collie", size: "Medium", age: 10, image: "collie2.jpg"},
{breed: "Collie", size: "Medium", age: 6, image: "collie3.jpg"},
{breed: "Fox Terrier", size:"Small", age: 7, image: "fox-terrier.jpg"},
{breed: "Fox Terrier", size:"Small", age: 4, image: "fox-terrier1.jpg"},
{breed: "Golden Retriever", size: "Medium", age: 2, image: "golden-retriever.jpg"},
{breed: "Golden Retriever", size: "Medium", age: 9, image: "golden-retriever1.jpg"},
{breed: "Golden Retriever", size: "Medium", age: 11, image: "golden-retriever2.jpg"},
{breed: "Great Dane", size: "Large", age: 2, image: "great-dane.jpg"},
{breed: "Great Dane", size: "Large", age: 5, image: "great-dane1.jpg"},
{breed: "Great Dane", size: "Large", age: 7, image: "great-dane2.jpg"},
{breed: "Great Dane", size: "Large", age: 7, image: "great-dane3.jpg"},
{breed: "Great Dane", size: "Large", age: 8, image: "great-dane4.jpg"},
{breed: "Komondor", size: "Large", age: 8, image: "komondor.jpg"},
{breed: "Komondor", size: "Large", age: 10, image: "komondor1.jpg"},
{breed: "Komondor", size: "Large", age: 12, image: "komondor2.jpg"},
{breed: "Kuvasz", size: "Large", age: 7, image: "kuvasz.jpg"},
{breed: "Maltese", size: "Small", age: 6, image: "maltese.jpg"},
{breed: "Maltese", size: "Small", age: 7, image: "maltese1.jpg"},
{breed: "Pomsky", size: "Small", age: 5, image: "pomsky.jpg"},
{breed: "Pomsky", size: "Small", age: 9, image: "pomsky1.jpg"},
{breed: "Pug", size: "Small", age: 3, image: "pug.jpg"},
{breed: "Pug", size: "Small", age: 5, image: "pug1.jpg"},
{breed: "Pug", size: "Small", age: 7, image: "pug2.jpg"},
{breed: "Pug", size: "Small", age: 5, image: "pug3.jpg"},
{breed: "Pug", size: "Small", age: 11, image: "pug4.jpg"}
];

function previous() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
};

function next() {
  if (currentPage < numPages()) {
    currentPage++;
    changePage(currentPage);
  }
};

function changePage(page) {
  $('li').removeClass('current');
  currentPage = page;
  $('#' + currentPage).addClass('current');
  if (page < 1) {
    page = 1;
  };
  if (page > numPages()) {
    page = numPages;
  };
  $('#images').html("");

  for (let i = (page - 1) * imagesPerPage; i < (page * imagesPerPage); i++ ) {
    let newDog = `<li>
                    <a href="#">
                      <img src="./public/images/${dogs[i].image}" alt="Dog Image">
                    </a>
                    <i class="heart far fa-heart"></i>
                    <div></div>
                  </li>`
    $('#images').append(newDog);
  };
};

function numPages() {
  return Math.ceil(dogs.length / imagesPerPage);
};

function addNumberPages() {
  for (let i = 1; i <= numPages(); i++) {
    let pages = `<li id=${i}><a href="javascript:changePage(${i})"><strong>${i}</strong></a></li>`
     $(".next").before(pages)
    // $('.pageNumber').append(pages)
  }
}

$('#images').on('click', '.heart', function() {
  $(this).removeClass('far fa-heart');
  $(this).addClass('fas fa-heart');
});

$('.prev').on('click', previous);
$('.next').on('click', next);

window.onload = function() {
  changePage(1);
  addNumberPages();
};
