$(document).ready(function () {
  $(document).on('click', '.heart', function () {
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
    } else {
      $.ajax({
        method: 'POST',
        url: '/like',
        data: {id},
        success: function (data) {
          console.log("Done!");
        }
      });
    };

    $(this).toggleClass('far fa-heart');
    $(this).toggleClass('fas fa-heart');
  });
});
