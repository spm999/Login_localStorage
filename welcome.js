// welcome.js
document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = checkLoginStatus();

    if (!isLoggedIn) {
        console.log('User is not logged in. Redirecting to signin.html');
        window.location.href = 'signin.html';
    } else {
        console.log('User is logged in. Welcome!');
    }
});

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
    // const username = localStorage.getItem('username');
    // return !!username;
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    console.log('Logout successful. Redirecting to signin.html');
    window.location.href = 'signin.html';
}
