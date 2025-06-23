document.getElementById("scrollToAbout").addEventListener("click", function () {
  window.scrollTo({
    top: 800,
    behavior: "smooth"
  });
});

// Debug scroll position
window.addEventListener('scroll', function() {
  console.log('Scroll position:', window.scrollY);
});

window.addEventListener("scroll", function () {
  const scrollTrigger = 300; // Adjust as needed
  const scrollTrigger2 = 400;
  const scrollTrigger3 = 1300;
  const scrollTrigger4 = 1400;

  const aboutBg = document.querySelector(".about-bg");
  const waveBg = document.querySelector(".wave");
  const skillsExpBg = document.querySelector(".skills-exp-bg");

  const colorLogo = document.querySelector(".header-nav");
  const colorLinks = document.querySelectorAll(".nav-links a"); // Select all links
  
  const aboutContent = document.querySelector(".about-content");
  const skillsExpContent = document.querySelector(".skills-exp-content");
  
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
    colorLogo.style.color = "#111111";
    colorLinks.forEach((link) => {
      link.style.color = "#111111";
    });
    aboutBg.classList.remove("visible");
  }
  if (window.scrollY > scrollTrigger2) {
    aboutContent.classList.add("visible");
  } else {
    aboutContent.classList.remove("visible");
  }

  if (window.scrollY > scrollTrigger3) {
    skillsExpBg.classList.add("visible");
    colorLogo.style.color = "#111111";
    colorLinks.forEach((link) => {
      link.style.color = "#111111";
    });
    aboutContent.classList.remove("visible");
  } else {
    skillsExpBg.classList.remove("visible");
  }
  if (window.scrollY > scrollTrigger4) {
    skillsExpContent.classList.add("visible");
    
  } else {
    skillsExpContent.classList.remove("visible");
    
  }
});

// Experience section interactivity
document.addEventListener('DOMContentLoaded', () => {
  const companyItems = document.querySelectorAll('.company-item');
  const jobContents = document.querySelectorAll('.job-content');

  // Function to update active company and show corresponding content
  const setActiveCompany = (companyElement) => {
    // Remove active class from all companies
    companyItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked company
    companyElement.classList.add('active');
    
    // Hide all job contents
    jobContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show selected company's content
    const companyId = companyElement.dataset.company;
    const selectedContent = document.getElementById(`${companyId}-content`);
    if (selectedContent) {
      selectedContent.classList.add('active');
    }
  };

  // Add click event listeners to company items
  companyItems.forEach(company => {
    company.addEventListener('click', () => setActiveCompany(company));
  });

  // Set first company as active by default
  const firstCompany = companyItems[0];
  if (firstCompany) {
    setActiveCompany(firstCompany);
  }

  // Add navigation link handlers
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      // Set specific scroll positions for each section
      switch(href) {
        case '#home-section':
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          break;
        case '#about-section':
          window.scrollTo({
            top: 800,
            behavior: 'smooth'
          });
          break;
        case '#skills-exp-section':
          window.scrollTo({
            top: 2000,
            behavior: 'smooth'
          });
          break;
        case '#projects':
          window.scrollTo({
            top: 2600,
            behavior: 'smooth'
          });
          break;
        case '#contact':
          window.scrollTo({
            top: 3000,
            behavior: 'smooth'
          });
          break;
      }
    });
  });
});




