// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('form-message').textContent = 'Thank you for your message!';
      document.getElementById('form-message').style.color = 'green';
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('form-message').textContent = 'Please fill out all fields.';
      document.getElementById('form-message').style.color = 'red';
    }
  });