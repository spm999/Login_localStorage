function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    // Check if the username already exists in local storage
    if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose another.');
    } else {
      // Store the username and password in local storage
      localStorage.setItem(username, password);
      alert('Sign up successful! Redirecting to Sign In page.');

      // Redirect to signin.html
      window.location.href = 'signin.html';
    }
  }
