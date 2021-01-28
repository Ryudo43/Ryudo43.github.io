jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px'
        }, 300);
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px'
        }, 300);
      }
    }
  });
  $('#jump').click(function() {
    $('body,html').animate({scrollTop:$('#steps').offset().top}, 400, 'swing');
    return false;
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
