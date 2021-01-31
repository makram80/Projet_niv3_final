//login
const f = document.querySelectorAll('#login');
const u = JSON.parse(localStorage.getItem('customer')) ;

f.forEach(item => {
item.addEventListener('submit', e => {
  e.preventDefault();
  const email2 = item.email.value;                 
  const password2 = item.password.value;

  let rules = u.find(o => o.email === email2).profile;   
  console.log("ruless : ",rules);
  
  const exist = u.find(user => user.email === email2 && user.password === password2); 
  const userC = {
                  //id: exist.id,
                  name: exist.name,
                  email: exist.email,
                  profile: rules
                 }; 
  if (exist)
  {
    localStorage.setItem('userConnected', JSON.stringify(userC));
    if (userC.profile == "admin") {
      location.href = 'espace_admin.html';    
    }else{ 
      form.reset(); 
      window.history.back();
      location.reload();
    }  
      
  } else { alert('email or password incorrect'); } 
})
});








