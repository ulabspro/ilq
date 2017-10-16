$('.article-zomato__phone').click(function (e) {
  e.preventDefault();
  var phone = $(this).data('phone');
  $(this).html(phone);
});