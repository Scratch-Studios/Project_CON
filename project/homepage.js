window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
  
    if (scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const scrollY = window.scrollY;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active'); 
      }
    });
  });