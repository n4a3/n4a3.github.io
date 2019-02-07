var buttonDown = document.querySelector('.button_down');

buttonDown.addEventListener('click', function (e) {
  e.preventDefault();
  
  var blockID = document.querySelector(buttonDown.getAttribute('href'));

  var topOfElement = blockID.offsetTop - 60;
  window.scroll({ top: topOfElement, behavior: "smooth" });
});
var header = document.querySelector('.header');

window.onscroll = function() {
  if (window.pageYOffset > 102) {
    header.classList.add('header_scrolled');
  } else {
    header.classList.remove('header_scrolled');
  }
};