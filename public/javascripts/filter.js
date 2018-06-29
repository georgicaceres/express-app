$(document).ready(function() {
    $(document).on('click', '#filter', function() {
        // Save filter variables if exists. If not, save empty string.
        let favorites = window.location.href.indexOf('favorites') >= 0;
        let breed = escape($('#selectBreed').val() || '');
        let size = $('#selectSize').val() || '';
        let age = $('#selectAge').val() || '';

        // Load data from the server and place the returned HTML into the matched element (in replace of $.ajax())
        $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&favorite=${favorites} #container`);
    });
})
