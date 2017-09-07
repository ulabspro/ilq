$('.top-menu__mobile').click(function () {
  var $this = $(this);
  $this.toggleClass('_active');
  $this.closest('.top-menu').find('.top-menu__list').toggleClass('_active');
  $('.mask, body').toggleClass('_active');
});

$('.mask').click(function () {
  $('.top-menu__mobile, .top-menu__list, body').removeClass('_active');
});