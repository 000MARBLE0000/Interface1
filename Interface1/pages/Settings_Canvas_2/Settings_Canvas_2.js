document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.settings-section');
  
    function showSection(id) {
      sections.forEach(function(section) {
        section.classList.remove('active');
      });
  
      const section = document.getElementById(id);
      if (section) {
        section.classList.add('active');
      }
    }
  
    const links = document.querySelectorAll('.settings-list a');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        showSection(target.substring(1));
      });
    });
  });