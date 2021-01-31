
var nbvisites  = JSON.parse(localStorage.getItem("visiteurs")) || [];
//************************* nombres de visites **********************************
let url = window.location.href;  //console.log(typeof(url) +" : "+ url);
let domaine = url.search(/index/i); 
if (domaine != -1) { 
    nbvisites++; 
    localStorage.setItem("visiteurs",JSON.stringify(nbvisites))
  } 
//affichage nombre total visiteurs
document.getElementById('visites').innerHTML = "<strong>Total visiteurs = </strong>" + nbvisites;

//************************** code pour visiteur location****************************
var detailVisiteurs  = JSON.parse(localStorage.getItem("infoVisiteurs")) || [];

function ipLookUp () {
    $.ajax('http://ip-api.com/json')
    .then(
        function success(response) {
            var detail ={
                VisiteurNumero: nbvisites,
                country: response.country,
                city: response.city,
                region: response.regionName
            }
            detailVisiteurs.push(detail)
            localStorage.setItem("infoVisiteurs",JSON.stringify(detailVisiteurs))
        },  
        function fail(status) { console.log('Request failed.  Returned status of',status); }
    );
  }
  ipLookUp() // fin location
  
  //affichage dans tab html espace admin
  var tab = document.getElementById("tabdisplay");
  var dataTab="";
  detailVisiteurs.forEach(info => {  
    //console.log(info.country)
    dataTab+=
    `<tr>
    <td> ${info.VisiteurNumero}</td>
    <td> ${info.country}</td>
    <td> ${info.city}</td>  
    <tr>`   
    tab.innerHTML=dataTab               
  });
 
  