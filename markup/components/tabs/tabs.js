$('[data-tab]').click(function (e) {
  e.preventDefault();
  var $this = $(this),
      tabCount = $this.index();

  $this.addClass('_active').siblings().removeClass('_active');

  $this.closest('.jsTabs').find('.jsTabsContent').find('[data-tabcontent]').eq(tabCount).addClass('_active').siblings().removeClass('_active');
});