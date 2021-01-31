
let nameRegex =/^[a-zA-ZéèïîÉÈÏÎ][a-zéèêàçîï]+([-'\s][a-zA-ZéèïîÉÈÏÎ][a-zéèêàçîï]+)?/;  
let nameData =document.getElementById('name');             let messagePassName=document.getElementById('name_notfound');
let emailData =document.getElementById('email');           let messagePassEmail=document.getElementById('email_notfound');
let passData =document.getElementById('password');         let messagePassPass=document.getElementById('pass_notfound');

//partie messagePass pour password **************
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
// When click on the password field, show the messagePass box
passData.onfocus = function() { document.getElementById("messagePass").style.display = "block";}
// When click outside of the password field, hide the messagePass box
passData.onblur = function() { document.getElementById("messagePass").style.display = "none";} 

passData.addEventListener('keyup', Passwordcheck);
passData.addEventListener('keypress', handleKeyPress);   passData.addEventListener('keyup', handleKeyUp);

//******** fin pour partie message password
const users = JSON.parse(localStorage.getItem('customer')) || [];
const form = document.querySelector('#register');

//**********************
//document.getElementById('btnRegister').addEventListener('click', form_valid);
//function form_valid(e){
  window.addEventListener('submit', e => {
  
    e.preventDefault();

    if( nameData.validity.valueMissing || emailData.validity.valueMissing || passData.validity.valueMissing ){
        //e.preventDefault();    //e.stopPropagation();
        messagePassName.textContent = "Name not Found";       messagePassName.style.color = 'red';
        messagePassEmail.textContent = "Email not Found";     messagePassEmail.style.color = 'red';
        messagePassPass.textContent = "Password not Found";   messagePassPass.style.color = 'red';

    }else if (nameRegex.test(nameData.value) == false) {
       // e.preventDefault();    //e.stopPropagation();
        console.log("name : ",nameData.value);
        messagePassName.textContent = "format problem !";     messagePassName.style.color = 'blue';

    }else if (emailData.value.indexOf("@") < 1 || ( emailData.value.lastIndexOf(".") - emailData.value.indexOf("@") < 2 )) {
     // e.preventDefault();    //e.stopPropagation();
        console.log("email: ",emailData.value);
        messagePassEmail.textContent = "Please enter correct email !";    
        messagePassEmail.style.color = 'blue';    

    }else{
      console.log("look good");
      //debut register
      let profile ="";   
      if (emailData.value != "admin@admin.com") { profile = "client"}else{ profile = "admin"};
    
      const data = {
        profile,
        name: nameData.value,
        email: emailData.value,
        password: passData.value
       };
    
      const unique = users.find(user => user.email === email);

      if (!unique) {
        users.push(data);
        localStorage.setItem('customer', JSON.stringify(users));
        form.reset();   location.reload()
      } else { alert('email already in use');  form.reset(); }   
    }  

  })//end function form_valid

//*********** time out pour faire disparaitre message ********
let timer,   timeoutVal = 1500;
    
 function handleKeyPress(e) {
	window.clearTimeout(timer);
  document.getElementById("messagePass").style.display = "block";
}
function handleKeyUp(e) {
	window.clearTimeout(timer); 
	timer = window.setTimeout(() => {
    document.getElementById("messagePass").style.display = "none"; 
  }, timeoutVal);
}
//**********
function Passwordcheck() {
    // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;  
  if(passData.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");  
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");   
  }
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(passData.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // Validate numbers
  var numbers = /[0-9]/g;
  if(passData.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Validate length
  if(passData.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  } 

}// end function Passwordcheck**************


//**************************  TEMP   **************************************
/*
const form = document.querySelector('#register');
const users = JSON.parse(localStorage.getItem('customer')) || [];

window.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;          //console.log(email);
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



