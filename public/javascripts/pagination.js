

$(document).ready(function() {
  // Event on specific page
  $(document).on('click',  '.page', function(event) {
    event.preventDefault();
    let breed = escape($('#selectBreed').val() || '');
    let size = $('#selectSize').val() || '';
    let age = $('#selectAge').val()|| '';
    let page = $(this).attr('id');
    $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&page=${page} #container`);
  });
  // Event on Previous button
  $(document).on('click',  '.prev.enable', function(event) {
    event.preventDefault();
    let breed = escape($('#selectBreed').val() || '');
    let size = $('#selectSize').val() || '';
    let age = $('#selectAge').val() || '';
    let page = $('.current > a > strong').text();
    page--;
    $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&page=${page} #container`);
  });
  $(document).on('click',  '.next.enable', function(event) {
    event.preventDefault();
    let breed = escape($('#selectBreed').val() || '');
    let size = $('#selectSize').val() || '';
    let age = $('#selectAge').val() || '';
    let page = $('.current > a > strong').text();
    page ++;
    $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&page=${page} #container`);
  });
})
