document.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {

      1024: {
        slidesPerView: 3,
        spaceBetween: 310, 
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: -300,
      },
      
    },
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact_Form');
  const emailInput = document.getElementById('email_Input');
  const errorMessage = document.getElementById('error_Message');

  // Agregar un evento click al input
  emailInput.addEventListener('click', function() {
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      errorMessage.textContent = 'Please enter an email';
    } else if (!isValidEmail(emailValue)) {
      errorMessage.textContent = 'Please insert a valid email';
    }
  });

  // Validar el formulario al enviar
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      errorMessage.textContent = 'Please enter an email';
    } else if (!isValidEmail(emailValue)) {
      errorMessage.textContent = 'Please insert a valid email';
    } else {
      errorMessage.textContent = ''; // Limpia el mensaje de error si la validación es exitosa
      console.log('Form submitted successfully');
      
      // form.submit();
    }
  });

  // Función para validar el formato de correo electrónico
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
