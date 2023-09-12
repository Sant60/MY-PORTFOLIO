const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('active'); sidebar.classList.toggle('active'); });

document.body.addEventListener('click', (customEvent) => {
  // Check if the click was outside the hamburger menu and close the menu if it's open
  if (!sidebar.contains(customEvent.target) && !menuToggle.contains(customEvent.target)) {
    sidebar.classList.remove('active'); menuToggle.classList.remove('active');
  }
});