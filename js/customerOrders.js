//affichage custumers-orders tab  
const userConnected = JSON.parse(localStorage.getItem('userConnected'));     //console.log(recup.name);
if (userConnected != null) 
{ 
const recup_checkout = JSON.parse(localStorage.getItem('stockage')); 

let tabMyorders = document.getElementById("tabMyorders");  
let dataTab="";  
Object.values(recup_checkout).forEach((element) => {  
  dataTab+=
  `<tr>
  <td>${element.order}</td>
  <td>${element.date}</td>
  <td>${element.articleName}</td>
  <td>${element.cost} $</td>
  <td><span class="badge badge-warning">On hold</span></td>
  </tr> `
tabMyorders.innerHTML=dataTab;  

let badgeclass= document.querySelector('.badge');
if (element.state =="bp") {
  badgeclass.textContent="Being prepared";   badgeclass.classList.toggle('bp');  
} else if (element.state =="done" ) {
  badgeclass.textContent="Done";       badgeclass.classList.toggle('done');  
}else if (element.state =="cancelled" ) {
  badgeclass.textContent="cancelled";    badgeclass.classList.toggle('cancelled'); }
});

}// end if user connected

