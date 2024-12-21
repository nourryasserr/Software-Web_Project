const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');


//format

// Format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Validate password strength
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Show error message
  function showError(input, message) {
    input.style.border = '2px solid red';
    
    // Check if an error message already exists
    let error = input.nextElementSibling;
    if (error && error.tagName === 'SMALL') {
      error.textContent = message;
    } else {
      error = document.createElement('small');
      error.style.color = 'black';
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
  }
  
  // Clear error message
  function clearError(input) {
    input.style.border = '';
    let error = input.nextElementSibling;
    if (error && error.tagName === 'SMALL') {
      input.parentNode.removeChild(error);
    }
  }
  
  // Handle login form submission
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = loginForm.querySelector('input[type="email"]');
    const password = loginForm.querySelector('input[type="password"]');
  
    let isValid = true;
  
    if (!isValidEmail(email.value)) {
      showError(email, 'Please enter a valid email');
      isValid = false;
    } else {
      clearError(email);
    }
  
    if (!isValidPassword(password.value)) {
      showError(password, 'Invalid password. Please try again.');
      isValid = false;
    } else {
      clearError(password);
    }
  
    if (isValid) {
      alert('Login Successful!');
      window.location.href = '../home/home.html';
    }
  });
  
  // Handle sign-up form submission
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = signupForm.querySelector('input[type="text"]');
    const email = signupForm.querySelector('input[type="email"]');
    const password = signupForm.querySelector('input[type="password"]');
  
    let isValid = true;
  
    if (username.value.trim() === '') {
      showError(username, 'Username cannot be empty.');
      isValid = false;
    } else {
      clearError(username);
    }
  
    if (!isValidEmail(email.value)) {
      showError(email, 'Please enter a valid email.');
      isValid = false;
    } else {
      clearError(email);
    }
  
    if (!isValidPassword(password.value)) {
      showError(password, 'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number.');
      isValid = false;
    } else {
      clearError(password);
    }
  
    if (isValid) {
      alert('Sign-up successful!');
      window.location.href = '../home/home.html';
    }
  });
  
