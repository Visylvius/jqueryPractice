$(document).ready(function() {
  $('.confirmation').on('click', 'button', function() {
    $(this).find('.ticket').slideDown();
  });
  //listens for click events inside .confirmation when they happen check if the target was .view-boarding-pass
  $('.confirmation').on('click', '.view-boarding-pass', function() {
    $(this).closest('.ticket').find('img').show();
  });
  $('.confirmation').on('click', 'button', function() {
    $.ajax('confirmation.html', {
      success: function(response) {
        $('.ticket').html(response).slideDown();
      },
      error: function(request, errorType, errorMessage) {
        alert('Error: ' + errorType + ' with message: ' + errorMessage);
      },
      timeout: 3000,
      beforeSend: function() {
        $('.confirmation').addClass('is-loading');
      },
      complete: function() {
        $('.confirmation').removeClass('is-loading');
      },
      data: { "confNum": 1234}
    });
  });
  //shorthand ajax syntax with get
  //$.get('confirmation.html', function(response) {
  //   $('.ticket').html(response).slideDown();
  // });
});
