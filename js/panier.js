/*
const rec = JSON.parse(localStorage.getItem('userConnected'));   
if(rec!=null) {
    clientc =  rec.name;       //console.log("user connected = ",rec.name);
}else{ 
    clientc =  "notRegister";   //console.log("need register :", clientc); 
}
*/
/*
let pr = [ 
    {
        name: "product1",
        tag: "product1",
        price: 100,
        inCart: 0
    },
    {
        name: "product2",
        tag: "product2",
        price: 200,
        inCart: 0
    },
    {
        name: "product3",
        tag: "product3",
        price: 300,
        inCart: 0
    },
    {
        name: "product4",
        tag: "product4",
        price: 400,
        inCart: 0
    },
    {
        name: "product2",
        tag: "product2",
        price: 500,
        inCart: 0
    },
    {
        name: "product1",
        tag: "product1",
        price: 600,
        inCart: 0
    }
];
*/
//localStorage.setItem('products', JSON.stringify(pr));  // temp makram
//
let products = localStorage.getItem('products');      products = JSON.parse(products);

let carts = document.querySelectorAll('.addtocart');  //boutton Add Cart  pour ajouter produit
// ETape1: parcour de tous les slector class .add-cart (boutton qui permet d'ajouter au panier)
for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {

        cartNumbers(products[i]);   // pour avoir le nombre total des produits  ajouter dans le panier  
        totalCost(products[i]);    // total flous
    });
}

//ETape3: function pour afficher nombre de produit dans le panier (span en haut). et l'appeler en bas pour s'executer 
 function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) { 
       var x = document.querySelectorAll('.itemincart');
       var i;
       for (i = 0; i < x.length; i++) {
        x[i].textContent = productNumbers +" items in cart"; 
        }
     }
}

 //ETape2: calculer le nombre total des produits dans le panier.
function cartNumbers(prod, action) {  // prod en parametre = products en haut
    //console.log("the product clicked is : ",prod);
    let productNumbers = localStorage.getItem('cartNumbers');     productNumbers = parseInt(productNumbers);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.itemincart').textContent = productNumbers - 1;
        //console.log("action running");
    }else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.itemincart').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.itemincart').textContent = 1;
    }
    setItems(prod); //appel function setItems
}

//calcul date
var dateObj = new Date();  var month = dateObj.getUTCMonth() + 1; 
var day = dateObj.getUTCDate();   var year = dateObj.getUTCFullYear();  var date = day+"/"+ month+"/"+year;  
//end date
//ETape4: 
function setItems(prod) { 
    let productNumbers = localStorage.getItem('cartNumbers');     productNumbers = parseInt(productNumbers);
    let panier = localStorage.getItem('productsInCart');          panier = JSON.parse(panier);
    
    if(panier != null) {   
        if( panier[prod.tag] == undefined ) { 
            panier = { 
                ...panier,
                [prod.tag]: prod
            }         
        } 
        panier[prod.tag].inCart += 1; 
        prod.date = date;
        //panier[prod.tag].client = clientc; 

    } else {
        prod.inCart = 1;
        prod.date = date;
        //prod.client = clientc;
        panier = { 
            [prod.tag]: prod        
        };
        
    }
    
    localStorage.setItem('productsInCart', JSON.stringify(panier)); //JSON.stringify().Cette opération transforme l’objet en une chaîne de caractères.
}

//calcul total cosat - money
function totalCost( prod, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart - prod.price);
    } else if(cart != null) {   
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + prod.price);
    } else {
        localStorage.setItem("totalCost", prod.price);
    }
}

function displayCart() {

    let panier = localStorage.getItem('productsInCart');    panier = JSON.parse(panier);  //console.log("panierr de client :", panier);
    //JSON.parse() reforme l’objet à partir de la chaîne linéarisée. 
    let cart = localStorage.getItem("totalCost");   cart = parseInt(cart);     
    let productContainer = document.querySelector('.products');  //modifier makram // <img src="./img/${item.tag}.jpg"/>

    if( panier && productContainer ) {
        productContainer.innerHTML = '';
        // Object.values crée un tableau contenant les valeurs de chaque propriété d’un objet.   
        Object.values(panier).map((item) => {     //Equivalent à  Object.values(panier).map(function(item) {  
            productContainer.innerHTML += 
            `<div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="${item.file}"/> 
            <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon> 
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon> 
            </div>
            <div class="total">$${item.inCart * item.price},00</div> `
            });    
            productContainer.innerHTML += 
            `<div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">$${cart},00</h4>
            </div> `    
        deleteButtons();
        manageQuantity();
    } //end if
} // end function

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let panier = localStorage.getItem('productsInCart');      panier = JSON.parse(panier);

    for(let i=0; i < increaseButtons.length; i++) {

        decreaseButtons[i].addEventListener('click', () => {
                console.log("manageQuantity : panier  increase : ",panier);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
                console.log("manageQuantity : currentQuantity increase : ",currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
                console.log("manageQuantity : currentProduct increase :",currentProduct);

            if( panier[currentProduct].inCart > 1 ) {
                panier[currentProduct].inCart -= 1;
                cartNumbers(panier[currentProduct], "decrease");
                totalCost(panier[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(panier));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
                console.log("manageQuantity : panier  decrease : ",panier);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
                console.log("manageQuantity : currentQuantity decrease : ",currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
                console.log("manageQuantity : currentProduct decrease :",currentProduct);

            panier[currentProduct].inCart += 1;
            cartNumbers(panier[currentProduct]);
            totalCost(panier[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(panier));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let panier = localStorage.getItem('productsInCart');     panier = JSON.parse(panier);
    let productName;
    console.log(panier);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
           
            localStorage.setItem('cartNumbers', productNumbers - panier[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( panier[productName].price * panier[productName].inCart));

            delete panier[productName];
            localStorage.setItem('productsInCart', JSON.stringify(panier));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();


