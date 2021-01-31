/*
const form = document.querySelector('#register');
const users = JSON.parse(localStorage.getItem('customer')) || [];

window.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value; //console.log(email);
  const password = document.getElementById('password').value;

  let profile ="";   
  if (email != "admin@admin.com") { profile = "client"}else{ profile = "admin"};

  const data = {
    profile,
    name,
    email,
    password };

  const unique = users.find(user => user.email === email);
  if (!unique) {
    users.push(data);
    localStorage.setItem('customer', JSON.stringify(users));
    form.reset();
    location.reload()
    //location.href = 'register.html';
  } else { alert('email already in use');
    form.reset(); }

});
*/

