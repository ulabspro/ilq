$(document).ready(function() {    
  var $box = $('.rocket'),
      $doc = $('body, html'),
      $win = $(window),
      winScrollTop = $win.scrollTop();

  $win.on("scroll.rocket", function() {
    setTimeout(function(){
      winScrollTop = $win.scrollTop();
    }, 10);
  });

  setInterval(function (){
    if ( winScrollTop > 100 ) {
      $box.addClass('_active');
    } else {
      $box.removeClass('_active');
    }
  }, 500);

  $box.on("click.rocket",function() {
    $doc.animate({
      scrollTop: 0
    }, 1000);
  });
});