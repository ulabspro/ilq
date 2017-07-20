(function() {   
    var cx = '!!!!!!!!!!!!!!!!!!!';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx='+ cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

window.onload = function(){
  document.getElementById('googleSearch').placeholder = 'Search';
  document.getElementById('googleSearch').style='';
};

document.getElementById('googleSearch').onblur = function() {
  this.placeholder = 'Search';
  this.style = '';
};