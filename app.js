var confirmation = {
  init: function() {
    $('.confirmation').on('click', 'button', this.loadConfirmation);
    $('.confirmation').on('click', '.view-boarding-pass', this.showBoardingPass );
  },
  loadConfirmation: function() {
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
  },
  showBoardingPass: function(event) {
    //listens for click events inside .confirmation when they happen check if the target was .view-boarding-pass
    $('.confirmation').on('click', '.view-boarding-pass', function() {
      $(this).closest('.ticket').find('img').show();
    });
  }
};

$(document).ready(function() {
  confirmation.init();
}



  // $('.confirmation').on('click', 'button', function() {
  //   $(this).find('.ticket').slideDown();
  // });


  //shorthand ajax syntax with get
  //$.get('confirmation.html', function(response) {
  //   $('.ticket').html(response).slideDown();
  // });
});
