
const user_Connected = JSON.parse(localStorage.getItem('userConnected'));     //console.log(recup.name);
if (user_Connected != null) 
{ 

/*  
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();   var year = dateObj.getUTCFullYear();
var date = day+"/"+ month+"/"+year;  // console.log(date);  */
 
 //product review
  const recupPanier = JSON.parse(localStorage.getItem('productsInCart')); 
  if (recupPanier != null) 
  {
  var tab = document.getElementById("tabfetch");
  var dataTab="";
  Object.values(recupPanier).forEach((info) => {  
    dataTab+=
    `<tr>
    <td> ${info.date}</td>
    <td><img src="${info.file}"/></td>
    <td> ${info.name}</td>
    <td> ${info.inCart}</td>
    <td> ${info.price}</td> 
    <td>$0</td>
    <td> ${info.price * info.inCart}</td> 
    <tr>`   
    tab.innerHTML=dataTab              
  }); // end

//affichage ORDER summary
const recupTot = JSON.parse(localStorage.getItem('totalCost'));  // console.log(recupTot);
document.getElementById("subtot").innerHTML = "$" + recupTot;
document.getElementById("finaltot").innerHTML = "$" + (recupTot +15);

//Shipping address à partir de checkout localstorage
const recupcheckout = JSON.parse(localStorage.getItem('checkout')); 
var tab2 = document.getElementById("shippingAdd");
var dataTab2="";
Object.values(recupcheckout).forEach((element) => {  
  dataTab2+=
  `<p> ${element.firstname +" "+ element.lastname}</p>
  <p> ${element.street}</p>
  <p> ${element.state}</p> 
  <p> ${element.country}</p>`   
  tab2.innerHTML=dataTab2               
});

 // save to viewOrder  use...
 localStorage.setItem('DATAproductsInCart', JSON.stringify(recupPanier));
 localStorage.setItem('DATAtotalCost', JSON.stringify(recupTot));
 localStorage.setItem('DATAcheckout', JSON.stringify(recupcheckout));

//******* to stockage
const nbArticles = JSON.parse(localStorage.getItem('cartNumbers')); 
let st1=[];  let articleName=[];  let articlePrice=[];  let articleNombre=[];  let stockInitial=[];

  Object.values(recupPanier).forEach((element) => { 
    articleName.push(element.name);
    articlePrice.push(element.price);
    articleNombre.push(element.inCart);
    stockInitial.push(element.stock);
  st1= { 
    articleName,
    articlePrice,
    articleNombre,
    stockInitial,
    date: element.date,
    cost:recupTot,
    client: user_Connected.name,
    totPanier:nbArticles,
    payment: recupcheckout[0].payment,
    order: recupcheckout[0].order,
    state:"holder"
    }
});    
   const stockage = JSON.parse(localStorage.getItem('stockage')) || [];
   if (stockage != null) {
    stockage.push(st1);
    localStorage.setItem("stockage",JSON.stringify(stockage));
   } else { localStorage.setItem("stockage",JSON.stringify(st1)); }
//end save to stockage

} // end if recupanier

//************************code view ici...
//view order with button click after deconnect/reconnect
const DATAproductsInCart = JSON.parse(localStorage.getItem('DATAproductsInCart')); 
const DATAtotalCost = JSON.parse(localStorage.getItem('DATAtotalCost')); 
const DATAcheckout = JSON.parse(localStorage.getItem('DATAcheckout')); 

if (DATAproductsInCart != null) 
{
function viewOrder() {
  //Shipping address à partir de checkout localstorage
  var tab3 = document.getElementById("shippingAdd");
  var dataTab3=""; 
  Object.values(DATAcheckout).forEach((element) => {  
  dataTab3+=
  `<p> ${element.firstname +" "+ element.lastname}</p>
  <p> ${element.street}</p>
  <p> ${element.state}</p> 
  <p> ${element.country}</p>`   
  tab3.innerHTML=dataTab3               
   }); 
  // order
  var tab2 = document.getElementById("tabfetch");
  var dataTab2="";
  Object.values(DATAproductsInCart).forEach((ele) => {  
    dataTab2+=
    `<tr>
    <td> ${ele.date}</td> 
    <td><img src="${ele.file}"/></td>
    <td> ${ele.name}</td>
    <td> ${ele.inCart}</td>
    <td> ${ele.price}</td> 
    <td>$0</td>
    <td> ${ele.price * ele.inCart}</td> 
    <tr>`   
    tab2.innerHTML=dataTab2              
  }); // end
  document.getElementById("subtot").innerHTML = "$" + DATAtotalCost;
  document.getElementById("finaltot").innerHTML = "$" + (DATAtotalCost +15);

}//end function view order


} // end if DATAproductsInCart
} // end if user_Connected 








