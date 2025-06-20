document.getElementById("scrollToAbout").addEventListener("click", function () {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  const scrollTrigger = 300; // Adjust as needed
  const aboutBg = document.querySelector(".about-bg");
  const waveBg = document.querySelector(".wave");
  const colorLogo = document.querySelector(".header-nav");
  const colorLinks = document.querySelectorAll(".nav-links a"); // Select all links
  const aboutContent = document.querySelector(".about-content");
  const scrollTrigger2 = 400;
  if (window.scrollY > scrollTrigger) {
    waveBg.style.opacity = 0;
    aboutBg.style.opacity = 1;
    colorLogo.style.color = "#f5f5f5";
    colorLinks.forEach((link) => {
      link.style.color = "#f5f5f5";
    });
    aboutBg.classList.add("visible");
  } else {
    waveBg.style.opacity = 1;
    aboutBg.style.opacity = 0;
    colorLogo.style.color = "#333";
    colorLinks.forEach((link) => {
      link.style.color = "#333";
    });
    aboutBg.classList.remove("visible");
  }
  if (window.scrollY > scrollTrigger2) {
    aboutContent.classList.add("visible");
  } else {
    aboutContent.classList.remove("visible");
  }
});


