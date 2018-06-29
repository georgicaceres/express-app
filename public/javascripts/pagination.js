function changePage(page) {
    // favorites variable is true when the url contains 'favorites' word
    let favorites = window.location.href.indexOf('favorites') >= 0;
    // Save filter variables if exists. If not, save empty string.
    let breed = escape($('#selectBreed').val() || '');
    let size = $('#selectSize').val() || '';
    let age = $('#selectAge').val()|| '';
    // Load data from the server and place the returned HTML into the matched element
    $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&page=${page}&favorite=${favorites} #container`);
}

$(document).ready(function() {
    // Event on specific page
    $(document).on('click', '.page', function(event) {
        event.preventDefault();
        let page = $(this).attr('id');
        changePage(page);
    });
    // Event on Previous button
    $(document).on('click', '.prev.enable', function(event) {
        event.preventDefault();
        let page = parseInt($('.current > a > strong').text()) - 1;
        changePage(page);
    });
    // Event on Next Button
    $(document).on('click', '.next.enable', function(event) {
        event.preventDefault();
        let page = parseInt($('.current > a > strong').text()) + 1;
        changePage(page);
    });
})
