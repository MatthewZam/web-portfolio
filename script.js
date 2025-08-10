document.getElementById("scrollToAbout").addEventListener("click", function () {
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
});

// Debug scroll position
window.addEventListener("scroll", function () {
  console.log("Scroll position:", window.scrollY);
});

window.addEventListener("scroll", function () {
  const scrollToAbout = 300; // Adjust as needed
  const scrollToAbout2 = 400;
  const scrollToExp = 1000;
  const scrollToExp2 = 1100;
  const scrollToSkills = 1500;
  const scrollToProjects = 2000;
  const scrollToProjects2 = 2100;
  const scrollToProjects3 = 2600;
  const scrollToProjects4 = 3100;
  const scrollToProjects5 = 3600;
  const scrollToContact = 4200;
  const scrollToContact2 = 4300;
  const scrollToFooter = 4900;
  const scrollToFooter2 = 5000;

  const homeBg = document.querySelector(".home-bg");
  const homeContent = document.querySelector(".home-content");
  const scrollArrow = document.querySelector(".scroll-arrow");
  const aboutBg = document.querySelector(".about-bg");
  const waveBg = document.querySelector(".wave");
  const skillsExpBg = document.querySelector(".skills-exp-bg");
  const projectsBg = document.querySelector(".projects-bg");
  const contactBg = document.querySelector(".contact-bg");
      
  const aboutContent = document.querySelector(".about-content");

  const ExpContent = document.querySelector(".exp-content");
  const skillsContent = document.querySelector(".skills-content");

  const projectsTitle = document.querySelector(".projects-title");
  const ecommerceContent = document.querySelector(".ecommerce");
  const dmsContent = document.querySelector(".dms");
  const petFeederContent = document.querySelector(".pet-feeder");
  const droneContent = document.querySelector(".drone");
  const msappContent = document.querySelector(".msapp");
  const flarpyContent = document.querySelector(".flarpy");
  const forestContent = document.querySelector(".forest");
  const waterContent = document.querySelector(".water");

  const contactTitle = document.querySelector(".contact-title");
  const contactLinks = document.querySelector(".contact-links");
  const contactP = document.querySelector(".contact-left p");
  const contactRight = document.querySelector(".contact-right");

  const footerTopLeft = document.querySelector(".footer-top-left");
  const footerTopRight = document.querySelector(".footer-top-right");
  const footerBottomCol = document.querySelectorAll(".footer-bottom-col");
  const footerCopyright = document.querySelector(".footer-copyright p");

  if (window.scrollY > scrollToAbout) {
    homeBg.style.opacity = 0;
    homeContent.classList.remove("visible");
    aboutBg.style.opacity = 1;
    aboutBg.classList.add("visible");
    scrollArrow.classList.remove("visible");
  } else {
    homeBg.style.opacity = 1;
    homeContent.classList.add("visible");
    aboutBg.style.opacity = 0;
    aboutBg.classList.remove("visible");
    scrollArrow.classList.add("visible");
  }
  if (window.scrollY > scrollToAbout2) {
    aboutContent.classList.add("visible");
  } else {
    aboutContent.classList.remove("visible");
  }

  if (window.scrollY > scrollToExp) {
    skillsExpBg.classList.add("visible");
    aboutContent.classList.remove("visible");
  } else {
    skillsExpBg.classList.remove("visible");
  }
  if (window.scrollY > scrollToExp2) {
    ExpContent.classList.add("visible");
  } else {
    ExpContent.classList.remove("visible");
  }
  if (window.scrollY > scrollToSkills) {
    skillsContent.classList.add("visible");
  } else {
    skillsContent.classList.remove("visible");
  }
  if (window.scrollY > scrollToProjects) {
    projectsBg.classList.add("visible");
    ExpContent.classList.remove("visible");
    skillsContent.classList.remove("visible");
  } else {
    projectsBg.classList.remove("visible");
  }
  if (window.scrollY > scrollToProjects2) {
    projectsTitle.classList.add("visible");
    ecommerceContent.classList.add("visible");
    dmsContent.classList.add("visible");
  } else {
    projectsTitle.classList.remove("visible");
    ecommerceContent.classList.remove("visible");
    dmsContent.classList.remove("visible");
  }

  if (window.scrollY > scrollToProjects3) {
    petFeederContent.classList.add("visible");
    droneContent.classList.add("visible");
  } else {
    petFeederContent.classList.remove("visible");
    droneContent.classList.remove("visible");
  }

  if (window.scrollY > scrollToProjects4) {
    msappContent.classList.add("visible");
    flarpyContent.classList.add("visible");
  } else {
    msappContent.classList.remove("visible");
    flarpyContent.classList.remove("visible");
  }

  if (window.scrollY > scrollToProjects5) {
    forestContent.classList.add("visible");
    waterContent.classList.add("visible");
  } else {
    forestContent.classList.remove("visible");
    waterContent.classList.remove("visible");
  }

  if (window.scrollY > scrollToContact) {
    contactBg.classList.add("visible");
    projectsTitle.classList.remove("visible");
    ecommerceContent.classList.remove("visible");
    dmsContent.classList.remove("visible");
    petFeederContent.classList.remove("visible");
    droneContent.classList.remove("visible");
    msappContent.classList.remove("visible");
    flarpyContent.classList.remove("visible");
    forestContent.classList.remove("visible");
    waterContent.classList.remove("visible");
  } else {
    contactBg.classList.remove("visible");
  }
  if (window.scrollY > scrollToContact2) {
    contactTitle.classList.add("visible");
    contactLinks.classList.add("visible");
    contactP.classList.add("visible");
    contactRight.classList.add("visible");
  } else {
    contactTitle.classList.remove("visible");
    contactLinks.classList.remove("visible");
    contactP.classList.remove("visible");
    contactRight.classList.remove("visible");
  }
  if (window.scrollY > scrollToFooter) {
    footerTopLeft.classList.add("visible");
    footerTopRight.classList.add("visible");
  } else {
    footerTopLeft.classList.remove("visible");
    footerTopRight.classList.remove("visible");
  }
  if (window.scrollY > scrollToFooter2) {
    footerBottomCol.forEach((col) => col.classList.add("visible"));
    footerCopyright.classList.add("visible");
  } else {
    footerBottomCol.forEach((col) => col.classList.remove("visible"));
    footerCopyright.classList.remove("visible");
  }
});

// Experience section interactivity
document.addEventListener("DOMContentLoaded", () => {
  const companyItems = document.querySelectorAll(".company-item");
  const jobContents = document.querySelectorAll(".job-content");

  // Function to update active company and show corresponding content
  const setActiveCompany = (companyElement) => {
    // Remove active class from all companies
    companyItems.forEach((item) => item.classList.remove("active"));

    // Add active class to clicked company
    companyElement.classList.add("active");

    // Hide all job contents
    jobContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Show selected company's content
    const companyId = companyElement.dataset.company;
    const selectedContent = document.getElementById(`${companyId}-content`);
    if (selectedContent) {
      selectedContent.classList.add("active");
    }
  };

  // Add click event listeners to company items
  companyItems.forEach((company) => {
    company.addEventListener("click", () => setActiveCompany(company));
  });

  // Set first company as active by default
  const firstCompany = companyItems[0];
  if (firstCompany) {
    setActiveCompany(firstCompany);
  }

  // Add navigation link handlers
  const navLinks = document.querySelectorAll(".nav-links a");
  const footerBottomLinks = document.querySelectorAll(".footer-bottom-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Set specific scroll positions for each section
      switch (href) {
        case "#home-section":
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          break;
        case "#about-section":
          window.scrollTo({
            top: 800,
            behavior: "smooth",
          });
          break;
        case "#skills-exp-section":
          window.scrollTo({
            top: 1700,
            behavior: "smooth",
          });
          break;
        case "#projects-section":
          window.scrollTo({
            top: 2700,
            behavior: "smooth",
          });
          break;
        case "#contact-section":
          window.scrollTo({
            top: 4700,
            behavior: "smooth",
          });
          break;
      }
    });
  });
  footerBottomLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Set specific scroll positions for each section
      switch (href) {
        case "#home-section":
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          break;
        case "#about-section":
          window.scrollTo({
            top: 800,
            behavior: "smooth",
          });
          break;
        case "#skills-exp-section":
          window.scrollTo({
            top: 2000,
            behavior: "smooth",
          });
          break;
        case "#projects-section":
          window.scrollTo({
            top: 3000,
            behavior: "smooth",
          });
          break;
        case "#contact-section":
          window.scrollTo({
            top: 5000,
            behavior: "smooth",
          });
          break;
      }
    });
  });
});

// Fix anchor scroll offset for cross-page navigation (e.g., from project pages)
window.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    // Timeout ensures styles are applied and layout is stable
    setTimeout(function () {
      var id = window.location.hash.substring(1);
      var el = document.getElementById(id);
      if (el) {
        // Adjust this value to match your header height
        var offset = 111;
        var rect = el.getBoundingClientRect();
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - offset,
          behavior: "auto",
        });
      }
    }, 1);
  }
});

// --- NAV INDICATOR ANIMATION ---
function updateNavIndicator() {
const navLinks = document.querySelectorAll('.nav-links a');
const indicator = document.querySelector('.nav-indicator');
const activeLink = document.querySelector('.nav-links a.active');
if (!indicator || !activeLink) return;
const parent = activeLink.parentElement;
const horizontalPadding = 30; // px, adjust as needed
indicator.style.width = `${parent.offsetWidth + horizontalPadding}px`;
indicator.style.left = `${parent.offsetLeft - horizontalPadding / 2}px`;
}

function setActiveNavLinkBySection() {
const sections = [
  { id: 'home-section', link: 0 },
  { id: 'about-section', link: 1 },
  { id: 'skills-exp-section', link: 2 },
  { id: 'projects-section', link: 3 },
  { id: 'contact-section', link: 4 },
];
const navLinks = document.querySelectorAll('.nav-links a');
let scrollPos = window.scrollY || window.pageYOffset;
let found = false;
for (let i = sections.length - 1; i >= 0; i--) {
  const section = document.getElementById(sections[i].id);
  if (section && scrollPos + 450 >= section.offsetTop) {
    navLinks.forEach(l => l.classList.remove('active'));
    navLinks[sections[i].link].classList.add('active');
    found = true;
    break;
  }
}
if (!found) {
  navLinks.forEach(l => l.classList.remove('active'));
  navLinks[0].classList.add('active');
}
updateNavIndicator();
}

document.addEventListener('DOMContentLoaded', function() {
const navLinks = document.querySelectorAll('.nav-links a');
// Ensure at least one link is active
if (![...navLinks].some(link => link.classList.contains('active'))) {
  navLinks[0].classList.add('active');
}
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    updateNavIndicator();
  });
});

// Make home content visible on page load
  const homeContent = document.querySelector(".home-content");
  const scrollArrow = document.querySelector(".scroll-arrow");
  const homeBg = document.querySelector(".home-bg");
  
  if (homeContent) homeContent.classList.add("visible");
  if (scrollArrow) scrollArrow.classList.add("visible");
  if (homeBg) {
    homeBg.style.opacity = 1;
    homeBg.classList.add("visible");
  }
});

window.addEventListener('load', function() {
updateNavIndicator();
const indicator = document.querySelector('.nav-indicator');
if (indicator) indicator.style.opacity = 1;
// Force a second update after 200ms for layout shifts
setTimeout(updateNavIndicator, 200);
});

window.addEventListener('resize', updateNavIndicator);
window.addEventListener('scroll', setActiveNavLinkBySection);

// Handle contact form submission with EmailJS
document.addEventListener("DOMContentLoaded", function () {
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Store current scroll position
    const scrollPos = window.scrollY || window.pageYOffset;
    
    // Show loading state
    const submitBtn = document.getElementById("submit-btn");
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    
    // Get your actual service ID and template ID from EmailJS dashboard
    const serviceID = "service_y3yv4c9"; // Replace with your actual service ID
    const templateID = "template_sqofxrb"; // Replace with your actual template ID
    
    // Get form data
    const formData = new FormData(this);
    const userName = formData.get('from_name');
    const userEmail = formData.get('reply_to');
    const userSubject = formData.get('subject') || "Contact from Portfolio Website";
    const userMessage = formData.get('message');
    
    // Create template parameters with all necessary fields
    const templateParams = {
      from_name: userName,
      reply_to: userEmail,
      subject: userSubject,
      message: userMessage,
      email: userEmail // Adding email explicitly for template display
    };
    
    console.log("Attempting to send email with EmailJS...");
    console.log("Template parameters:", templateParams);
    
    // Send email using EmailJS with explicit parameters
    emailjs.send(serviceID, templateID, templateParams)
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        
        // Success
        formStatus.textContent = "Message sent successfully!";
        formStatus.className = "form-status success";
        formStatus.style.display = "block";
        contactForm.reset();
        
        // Restore scroll position
        window.scrollTo(0, scrollPos);
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = "none";
          }, 5000);
        }, 3000);
      })
      .catch(function(error) {
        // Detailed error
        console.error("EmailJS error:", error);
        
        let errorMessage = "Failed to send message. ";
        if (error.text) {
          errorMessage += error.text;
        } else {
          errorMessage += "Please check your EmailJS configuration and try again.";
        }
        
        formStatus.textContent = errorMessage;
        formStatus.className = "form-status error";
        formStatus.style.display = "block";
        
        // Restore scroll position
        window.scrollTo(0, scrollPos);
        
        // Reset button
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
  });
}
});
