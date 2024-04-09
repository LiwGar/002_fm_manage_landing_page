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
      errorMessage.textContent = ''; // Limpiar el mensaje de error si la validación es exitosa
      console.log('Form submitted successfully');
      // Aquí puedes enviar el formulario o realizar otras acciones necesarias
      // form.submit();  // No llames a form.submit() aquí si estás manejando el envío de otra manera
    }
  });

  // Función para validar el formato de correo electrónico
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
