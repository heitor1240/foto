let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    header.style.top = '-80px'; 
  } else {
    header.style.top = '0'; 
  }
  lastScroll = currentScroll;
});
