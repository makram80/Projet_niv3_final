var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();   var year = dateObj.getUTCFullYear();
var date = day+"/"+ month+"/"+year;  // console.log(newdate);
//
const form = document.querySelector('#formCheckout1');
const checkout1 = JSON.parse(localStorage.getItem('checkout')) || [];
let order =0;
form.addEventListener('submit', e => {
  e.preventDefault();
  const firstname = form.firstname.value;
  const lastname = form.lastname.value;
  const company = form.company.value;
  const street = form.street.value;
  const state = form.state.value;
  const country = form.country.value;
  const phone = form.phone.value;
  const deliveryMethod = form.delivery.value;
  order++
  const data = {
    date,
    order,
    firstname,
    lastname,
    company,
    street,
    state,
    country,
    phone,
    deliveryMethod,
    payment:""
  };

    checkout1.push(data);
    localStorage.setItem('checkout', JSON.stringify(checkout1));
    location.href = 'checkout3.html';
});