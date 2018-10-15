function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar-hidden')
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});