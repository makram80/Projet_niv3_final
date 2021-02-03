const recup = JSON.parse(localStorage.getItem('userConnected'));     //console.log(recup.name);
if (recup != null) 
{ 
      //console.log("Connected")
      // cacher login
      document.getElementById("edit").children[0].style.display = "none"
     
      // aller a login et changer vers logout 
      var logout_span = document.createElement("span"); 
      var lien = document.createElement('a');  lien.className = 'note'; 
      var linkText = document.createTextNode("Welcome"+ " " +recup.name+ " " +" | Logout");
      lien.appendChild(linkText);
      lien.title = "Logout" + " " + recup.name ;   lien.href = "#";  
      logout_span. appendChild(lien);
      document.getElementById("edit").prepend(logout_span);  

      //logout 
      document.querySelector(".note").addEventListener("click", logoutFunction);
      function logoutFunction() {
        localStorage.removeItem("cartNumbers");
        localStorage.removeItem("checkout");
        localStorage.removeItem("productsInCart");
        localStorage.removeItem("totalCost");
        localStorage.removeItem("userConnected");
        //localStorage.clear(); 
        location.reload();       
        }   

} //else{console.log("aucun client/user est connecté")};


