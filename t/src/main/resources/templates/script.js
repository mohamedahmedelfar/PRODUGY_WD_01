window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#471';
  } else {
    navbar.style.backgroundColor = '#155';
  }
});
