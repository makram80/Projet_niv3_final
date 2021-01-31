
//****************vente inachevée (panier abondoner) : *************************
let produitDansPanier = JSON.parse(localStorage.getItem("productsInCart")) ;
const clientConnected = JSON.parse(localStorage.getItem('userConnected')); 
let panier_inachever = 0;  

if(produitDansPanier !=null && clientConnected ==null) { 
   Object.values(produitDansPanier).forEach((item) => {   
        panier_inachever = panier_inachever + item.inCart;                                
  })
}  
//affichage dans dashbord.html 
document.getElementById("panierInachever").innerHTML = panier_inachever +" articles";

//******************************************************
// Recuperer du stockage er calcul de: chiffre d'affaire + article vendue + vente achevée
let chiffreAffaire =0;     let nbArticles_achever=0;    let panier_achever=0;    let detailNb=[];   let artName=[];
const stockage = JSON.parse(localStorage.getItem('stockage')) 
if (stockage != null) {
stockage.forEach(ele => {
     artName.push( ele.articleName);   
     detailNb.push(ele.articleNombre); 
     chiffreAffaire = chiffreAffaire + ele.cost; 
     nbArticles_achever = nbArticles_achever + ele.totPanier;
     if (ele.payment != null) { panier_achever = panier_achever +1;  }// else pour traitement de panier incachevée
}); 
};
//console.log("articleName : ", artName);      console.log("detailNb : ", detailNb);     
document.getElementById("shippingAdd").innerHTML = chiffreAffaire +" $ ";
document.getElementById("nbproduitVendue").innerHTML = nbArticles_achever;
document.getElementById("panierAchever").innerHTML = panier_achever;

// stock initial total à partir de products :
const baseProducts = JSON.parse(localStorage.getItem('products'));   //console.log("Products1 stock : ", baseProducts[0].stock)
let stockTot =0;   
if (baseProducts != null) {
  baseProducts.forEach(ligne => {
    stockTot = stockTot + ligne.stock;       
  }); 
  }
document.getElementById("stockTotalDepart").innerHTML = stockTot;
let stockCourant= stockTot - nbArticles_achever;
document.getElementById("stockActuel").innerHTML = stockCourant;

//pour stock par produit :
let temp =[];     let tempName =[];     let tempNb =[];
artName.forEach((num1, index) => {
  const num2 = detailNb[index];   //console.log(num1, num2);  
  //fin code doube loop 
  temp=[num1, num2];    // console.log("temp[0] : ",temp[0] );   console.log("temp[1]: ", temp[1] );
  temp[0].forEach(n =>{  tempName.push(n); });  
  temp[1].forEach(n =>{  tempNb.push(n);   }); 
});  //console.log("tempName: ", tempName);   console.log("tempNb: ", tempNb);

let totNombreProduit1 =0;    let totNombreProduit2 =0;    let totNombreProduit3 =0;    let totNombreProduit4 =0;
let tot1 =0; let tot2 =0; let tot3 =0;  let tot4 =0;
//double loop
 for(var i=j=0; i < tempName.length && j < tempNb.length;  i++, j++){
      //console.log( "tempName[i] : ",tempName[i],"tempNb[j]: ", tempNb[j] ); 
      if (tempName[i] == "product1") { totNombreProduit1 = totNombreProduit1 + tempNb[j]; 
         tot1 = baseProducts[0].stock - totNombreProduit1; }
      else if (tempName[i] == "product2"){ totNombreProduit2 = totNombreProduit2 + tempNb[j]; 
         tot2 = baseProducts[1].stock - totNombreProduit2; }  
      else if (tempName[i] == "product3"){ totNombreProduit3 = totNombreProduit3 + tempNb[j]; 
         tot3 = baseProducts[2].stock - totNombreProduit3; } 
      else if (tempName[i] == "product4"){ totNombreProduit4 = totNombreProduit4 + tempNb[j];
         tot4 = baseProducts[3].stock - totNombreProduit4; }  
}
//console.log("tot1 : ", tot1);  console.log("tot2 :", tot2);  console.log("tot3 :", tot3);  console.log("tot4 :", tot4);

if (tot1 !=0 && tot1 < 6 ) { 
    //console.log( "alerte stock produit 1: Stock infereieur à 6 = ",tot1 ); 
    document.getElementById("alerteStock").innerHTML = "product1 < 6 !!"+"<br>" +" On stock Now  " + tot1;   blink()
  }else if( tot2 !=0 && tot2 < 6 ){
    document.getElementById("alerteStock").innerHTML = "product2 < 6 !!"+"<br>" +" On stock Now  " + tot2;   blink()
  }
  else if(tot3 != 0 && tot3 < 6 ){
    document.getElementById("alerteStock").innerHTML = "product3 < 6 !!"+"<br>" +" On stock Now  " + tot3;   blink()
  }else if(tot4 !=0 && tot4 < 6 ){
    document.getElementById("alerteStock").innerHTML = "product2 < 6 !!"+"<br>" +" On stock Now  " + tot4;  blink() } 
 
    // pour affichage blink + dom vers rouge 
function blink() {
  document.querySelectorAll('.border-success').forEach(cl => { cl.classList.toggle('border-danger'); });
  document.querySelectorAll('.text-success').forEach(cl => { cl.classList.toggle('text-danger'); }); 
 //blink code 
 let blink = setInterval(setColor, 1000);
  function setColor() {
   document.getElementById('blink').style.display = (document.getElementById('blink').style.display == 'none' ? '' : 'none');
  }; setTimeout(function(){ clearInterval(blink) }, 20000);
}

// order table for admin 
let tabAdminOrders = document.getElementById("tabAminOrders");  
let dataTabAdmin="";  
Object.values(stockage).forEach((element) => {  
  dataTabAdmin+=
  `<tr>
  <td>${element.order}</td>
  <td>${element.date}</td>
  <td>${element.articleName}</td>
  <td>${element.cost} $</td>
  <td><span class="badge badge-warning">On hold</span></td> 
  <td><select class="form-control" id="status" onchange="changeFunc();">
    <option value="">change Status</option>
    <option value="bp">Being prepared</option>
    <option value="done">done</option>
    <option value="cancelled">Cancelled</option>
  </select></td>
  </tr> 
  `
  tabAdminOrders.innerHTML=dataTabAdmin;  
});

function changeFunc() {
  var select = document.getElementById("status");
  var selectedValue = select.options[select.selectedIndex].value;  //alert(selectedValue);
  Object.values(stockage).forEach((el) => { el.state= selectedValue;  });
  localStorage.setItem("stockage",JSON.stringify(stockage));
  
  changeSpan()
  location.reload()
}// end function changeFunc

function changeSpan() { 
  Object.values(stockage).forEach((param) => { 
    //console.log("param.state:",param.state);
    if (param.state =="bp") {
      document.querySelector('.badge').textContent="Being prepared"; 
      document.querySelector('.badge').classList.toggle('bp');  
    } else if (param.state =="done" ) {
      document.querySelector('.badge').textContent="Done"; 
      document.querySelector('.badge').classList.toggle('done');  
    }else if (param.state =="cancelled" ) {
      document.querySelector('.badge').textContent="cancelled"; 
      document.querySelector('.badge').classList.toggle('cancelled'); }
    });
  } // end function changespan
  changeSpan()




