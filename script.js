document.addEventListener('DOMContentLoaded', () => { 
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (email && password) {
        window.location.href = 'home.html';
      } else {
        alert('Please fill in all fields');
      }
    });
  }

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (firstName && lastName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          window.location.href = 'login.html';
        } else {
          alert('Passwords do not match');
        }
      } else {
        alert('Please fill in all fields');
      }
    });
  }
});


const toggleButtons = document.querySelectorAll('.toggle-button');
toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});