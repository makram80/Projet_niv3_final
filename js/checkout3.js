
// recuperer le contenue de checkout et ajouter dedans le mode de payment + set
const checkout3 = JSON.parse(localStorage.getItem('checkout'));

if (checkout3 !=null ) {
const radio = document.querySelector('#CheckoutPayment');
radio.addEventListener('submit', e => {
  e.preventDefault();

  Object.values(checkout3).forEach((item) => {  
      item.payment = radio.payment.value; 
   
    localStorage.setItem('checkout', JSON.stringify(checkout3));  
    location.href = 'orderReview.html';
});


});
} else { console.log("payment non encore valider"); }

//affichage ORDER summary
const recupTot = JSON.parse(localStorage.getItem('totalCost'));  // console.log(recupTot);
document.getElementById("subtot").innerHTML = "$" + recupTot;
document.getElementById("finaltot").innerHTML = "$" + (recupTot +15);

