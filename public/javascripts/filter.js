$(document).ready(function() {
    $(document).on('click', '#filter', function() {
        let favorites = window.location.href.indexOf('favorites') >= 0;
        let breed = escape($('#selectBreed').val() || '');
        let size = $('#selectSize').val() || '';
        let age = $('#selectAge').val() || '';

        $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&favorite=${favorites} #container`);

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
