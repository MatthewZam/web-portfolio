document.getElementById('scrollToAbout').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
  const scrollTrigger = 300; // Adjust as needed
  //const homeBg = document.querySelector('.home-bg');
  const aboutBg = document.querySelector('.about-bg');
  const waveBg = document.querySelector('.wave');
  const colorLogo = document.querySelector('.header-nav');
  const colorLinks = document.querySelectorAll('.nav-links a'); // Select all links
  if (window.scrollY > scrollTrigger) {
    waveBg.style.opacity = 0;
    aboutBg.style.opacity = 1;
    colorLogo.style.color = '#f5f5f5';
    colorLinks.forEach(link => {
      link.style.color = '#f5f5f5';
    });
  } else {
    waveBg.style.opacity = 1;
    aboutBg.style.opacity = 0;
    colorLogo.style.color = '#333';
    colorLinks.forEach(link => {
      link.style.color = '#333';
    });
  }
});