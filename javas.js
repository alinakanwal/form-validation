let username = localStorage.getItem('username');
let email = localStorage.getItem('email');
let password = localStorage.getItem('password')

document.getElementById('displayUsername').textContent = username;
document.getElementById('displayEmail').textContent = email;
document.getElementById('displaypassword').textContent = password;