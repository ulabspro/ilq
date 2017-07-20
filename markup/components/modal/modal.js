$('.jsModalCall').click(function (e) {
  e.preventDefault;
  var modalItem = $(this).data('modal');

  $(modalItem).addClass('_active');
  $('.mask').addClass('_active');
});

$('.mask, .jsModalClose').click(function (e) {
  e.preventDefault;

  $('.mask, .modal').removeClass('_active');
});