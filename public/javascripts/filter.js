$(document).ready(function() {
  $(document).on('click', '#filter', function() {
    console.log('estoy acá')
    let breed = escape($('#selectBreed').val() || '');
    let size = $('#selectSize').val() || '';
    let age = $('#selectAge').val()|| '';

    $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age} #container`);

    // $.ajax({
    //   type: "GET",
    //   url: `/filter?breed=${breed}&size=${size}&age=${age}`  ,
    //   success: function (result) {
    //     console.log(result);
    //   },
    //   error: function (result) {
    //     alert("No pudo resolver");
    //   }
    // });
  });
})
