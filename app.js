$(document).ready(function() {
  $('.confirmation').on('click', 'button', function() {
    $(this).find('.ticket').slideDown();
  });
  $('.confirmation .view-boarding-pass').on('click', function() {
    $(this).closest('.ticket').find('img').show();
  });
  $('.confirmation').on('click', 'button', function() {
    $.ajax('confirmation.html', {
      success: function(response) {
        $('.ticket').html(response).slideDown();
      },
      data: { "confNum": 1234}
    
    });
  });
  //shorthand ajax syntax with get
  //$.get('confirmation.html', function(response) {
  //   $('.ticket').html(response).slideDown();
  // });
});
