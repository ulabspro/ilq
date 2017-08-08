$('.top-menu__mobile').click(function () {
  var $this = $(this);
  $this.toggleClass('_active');
  $this.closest('.top-menu').find('.top-menu__list').toggleClass('_active');
});