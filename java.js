document.getElementById('formvalidation').addEventListener('submit',function(event){
 document.getElementById('errorusername').textContent = '';
 document.getElementById('emailerror').textContent = '';
 document.getElementById('errorpassword').textContent = '';
 document.getElementById('confirmPasswordError').textContent = '';
let isvalid = true;

// access input value

let username = document.getElementById('username').value.trim();
let email = document.getElementById('email').value.trim();
let password = document.getElementById('Password').value;
let confirm = document.getElementById('confirmPassword').value;

// condition

if(username === ""){
    document.getElementById('errorusername').textContent = "Username is required."
    isvalid = false;
}

let emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(email === "" || !emailpattern.test(email)){
    document.getElementById('emailerror').textContent = "Please enter valid email."
    isvalid = false;
}

if(password.length < 6){
    document.getElementById('errorpassword').textContent = 'Password must be at least 6 characters long.'
isvalid = false;
}

if (password !== confirm) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    isvalid = false; 
}



if(!isvalid){
    event.preventDefault();
}else {
    
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password',password)
    window.open('userDetails.html');
}

})