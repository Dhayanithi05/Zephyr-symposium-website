AOS.init();
// Add this code to your script.js file
window.addEventListener('scroll', function() {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.8) {
        card.classList.add('animate');
      } else {
        card.classList.remove('animate');
      }
    });
  });

  window.addEventListener('scroll', function() {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.8) {
        card.classList.add('animate');
      } else {
        card.classList.remove('animate');
      }
    });
  });