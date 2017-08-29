$('.article-meta-button._print').on('click', function () {
  $("#printarea").show();
  window.print();
});

$('.article-meta-button._email').on('click', function () {
  var url = window.location.href;
  var signature = '%0A%0A%0A -- Shared by ILoveQatar.net';
  window.location.href = 'mailto:?subject=subject&body='+ url + signature;
});