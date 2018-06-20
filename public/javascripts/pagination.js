function changePage(page) {
  let breed = escape($('#selectBreed').val() || '');
  let size = $('#selectSize').val() || '';
  let age = $('#selectAge').val()|| '';
  $('.wrapper.row2').load(`/filter?breed=${breed}&size=${size}&age=${age}&page=${page} #container`);
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
  $(document).on('click', '.next.enable', function(event) {
    event.preventDefault();
    let page = parseInt($('.current > a > strong').text()) + 1;
    changePage(page);
  });
})
