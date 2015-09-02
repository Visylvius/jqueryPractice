function Confirmation(el)  {
  this.el = el;
  this.ticket = this.el.find('.ticket');
  var confirmation = this;
  this.loadConfirmation = function() {
    $.ajax('confirmation.html', {
      success: function(response) {
        this.ticket.html(response).slideDown();
      },
      error: function(request, errorType, errorMessage) {
        alert('Error: ' + errorType + ' with message: ' + errorMessage);
      },
      timeout: 3000,
      context: confirmation,
      beforeSend: function() {
        $('.confirmation').addClass('is-loading');
      },
      complete: function() {
        $('.confirmation').removeClass('is-loading');
      },
      data: { "confNum": 1234}
    });
  },
  this.showBoardingPass = function(event) {
    event.preventDefault();
    //listens for click events inside .confirmation when they happen check if the target was .view-boarding-pass
    $(this).hide();
    confirmation.el.find('.boarding-pass').show();
    // $('.confirmation').on('click', '.view-boarding-pass', function() {
    //   $(this).closest('.ticket').find('img').show();
    // });
  }
  this.el.on('click', 'button', this.loadConfirmation);
  this.el.on('click', '.view-boarding-pass', this.showBoardingPass);
}

$(document).ready(function() {
  var paris = new Confirmation($('#paris'));
  var london = new Confirmation($('#london'));
  confirmation.init();
}

// init: function() {
//   $('.confirmation').on('click', 'button', this.loadConfirmation);
//   $('.confirmation').on('click', '.view-boarding-pass', this.showBoardingPass );
// },

  // $('.confirmation').on('click', 'button', function() {
  //   $(this).find('.ticket').slideDown();
  // });


  //shorthand ajax syntax with get
  //$.get('confirmation.html', function(response) {
  //   $('.ticket').html(response).slideDown();
  // });
});
