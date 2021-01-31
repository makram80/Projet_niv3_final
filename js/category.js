var productsImages = JSON.parse(localStorage.getItem("products"));
var dataFetch="";
     dataFetch+=`
            <div class="col-lg-4 col-md-6">
            <div class="product">
            <div class="flip-container">
            <div class="flipper">
              <div class="front"><a href=""><img src="${productsImages[0].file}" alt="" class="img-fluid" ></a></div>
              <div class="back"><a href=""><img src="${productsImages[0].file}" alt="" class="img-fluid" ></a></div>
            </div>
          </div>
          <a href="" class="invisible"><img src="${productsImages[0].file}" alt="" class="img-fluid"></a>
              <div class="text">
                <h3><a href="">Fur coat</a></h3><p class="price"><del></del>$100</p>
                <div class="addtocart"><p class="buttons"><a href="#" class="btn btn-outline-secondary">View detail</a><a href="#" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a></p></div>
          </div></div></div>

          <div class="col-lg-4 col-md-6">
            <div class="product">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front"><a href=""><img src="${productsImages[1].file}" alt="" class="img-fluid"></a></div>
                  <div class="back"><a href=""><img src="${productsImages[1].file} " alt="" class="img-fluid" ></a></div>
                </div>
              </div>
              <a href="" class="invisible"><img src="${productsImages[1].file}" alt="" class="img-fluid"></a>
              <div class="text">
                <h3><a href="detail.html">White Blouse Armani</a></h3>
                <p class="price"><del>$280</del>$200</p>
                <div class="addtocart">
                <p class="buttons"><a href="#" class="btn btn-outline-secondary">View detail</a><a href="#" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a></p>
              </div></div>
              <div class="ribbon sale">
                <div class="theribbon">SALE</div>
                <div class="ribbon-background"></div>
              </div>
              <div class="ribbon new">
                <div class="theribbon">NEW</div>
                <div class="ribbon-background"></div>
              </div>
              <div class="ribbon gift">
                <div class="theribbon">GIFT</div>
                <div class="ribbon-background"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="product">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front"><a href=""><img src=" ${productsImages[2].file}" alt="" class="img-fluid"></a></div>
                  <div class="back"><a href=""><img src=" ${productsImages[2].file}" alt="" class="img-fluid"></a></div>
                </div>
              </div>
              <a href="" class="invisible"><img src="${productsImages[2].file}" alt="" class="img-fluid"></a>
              <div class="text">
                <h3><a href="detail.html">Black Blouse Versace</a></h3>
                <p class="price"><del></del>$300</p>
                <div class="addtocart">
                <p class="buttons"><a href="#" class="btn btn-outline-secondary">View detail</a><a href="#" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a></p>
              </div></div>                    
            </div>         
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="product">
              <div class="flip-container">
                <div class="flipper">
                  <div class="front"><a href=""><img src= "${productsImages[3].file}" alt="" class="img-fluid"></a></div>
                  <div class="back"><a href=""><img src="${productsImages[3].file}" alt="" class="img-fluid"></a></div>
                </div>
              </div>
              <a href="" class="invisible"><img src="${productsImages[3].file}" alt="" class="img-fluid"></a>
              <div class="text">
                <h3><a href="detail.html">Black Blouse Versace</a></h3>
                <p class="price"><del></del>$400</p>
                <div class="addtocart">
                <p class="buttons"><a href="#" class="btn btn-outline-secondary">View detail</a><a href="#" class="btn btn-primary"><i class="fa fa-shopping-cart"></i>Add to cart</a></p>
              </div></div>
            </div>
          </div> `

document.getElementById("categorie").innerHTML=dataFetch