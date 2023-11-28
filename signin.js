function handleSignin(event) {
    event.preventDefault();

    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    // Check if the entered username exists in local storage
    if (localStorage.getItem(username) === password) {
        alert('Sign in successful!');
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
