$(document).ready(function () {
  $('.heart').click(function () {
    // let liked = localStorage.getItem('liked');
    // liked = liked ? JSON.parse(liked) : [];
    let id = $(this).attr('id');

    if ($(this).hasClass('fas fa-heart')) {
      $.ajax({
        method: 'POST',
        url: '/unlike',
        data: {id},
        success: function (data) {
          console.log("Succes!")
        }
      });
      // liked.splice(liked.indexOf(id));
    } else {
      $.ajax({
        method: 'POST',
        url: '/like',
        data: {id},
        success: function (data) {
          console.log("Done!");
        }
      })
      // liked.push(id);
    }
    // localStorage.setItem('liked', JSON.stringify(liked));

    $(this).toggleClass('far fa-heart');
    $(this).toggleClass('fas fa-heart');
  });

  // let liked = localStorage.getItem('liked')
  // liked = liked ? JSON.parse(liked) : [];
});
