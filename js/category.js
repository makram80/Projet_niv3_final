var productsIn = JSON.parse(localStorage.getItem("products"));
var dataFetch="";
productsIn.forEach(prod => { 
     dataFetch+=`
            <div class="col-lg-4 col-md-6">
            <div class="product">
            <div class="flip-container">
            <div class="flipper">
              <div class="front"><a href=""><img src="${prod.file}" alt="" class="img-fluid" ></a></div>
              <div class="back"><a href=""><img src="${prod.file}" alt="" class="img-fluid" ></a></div>
            </div>
          </div>
          <a href="" class="invisible"><img src="${prod.file}" alt="" class="img-fluid"></a>
              <div class="text">
                <h3><a href="">Fur coat</a></h3><p class="price"><del></del>$${prod.price}</p>
                <div class="addtocart"><p class="buttons"><a href="#" class="btn btn-outline-secondary">View detail</a><a href="#" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a></p></div>
          </div></div></div>     
           `
});

document.getElementById("categorie").innerHTML=dataFetch