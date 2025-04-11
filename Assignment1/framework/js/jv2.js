

//FOR TESTING: side navigation 
const toggleButton = document.querySelector('.navbar-toggler');
const sideNav = document.getElementById('sideNav');

toggleButton.addEventListener('click', function() {
  sideNav.classList.toggle('active');
});