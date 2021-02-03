var prod = JSON.parse(localStorage.getItem("products"));
var dataIndex="";
prod.forEach(prod => { 
     dataIndex+=`
               <div class="item">
                <div class="product">
                  <div class="flip-container">
                    <div class="flipper">
                      <div class="front"><a href="category.html"><img src="${prod.file}" alt="" class="img-fluid"></a></div>
                      <div class="back"><a href="category.html"><img src="${prod.file}" alt="" class="img-fluid"></a></div>
                    </div>
                  </div><a href="category.html" class="invisible"><img src="${prod.file}" alt="" class="img-fluid"></a>
                  <div class="text">
                    <h3><a href="category.html">${prod.name}</a></h3>
                    <p class="price"> <del></del>$${prod.price}</p>
                  </div>
                  <!-- /.text-->
                  <div class="ribbon sale">
                    <div class="theribbon">SALE</div>
                    <div class="ribbon-background"></div>
                  </div>
                  <!-- /.ribbon-->
                  <div class="ribbon new">
                    <div class="theribbon">NEW</div>
                    <div class="ribbon-background"></div>
                  </div>
                  <!-- /.ribbon-->
                  <div class="ribbon gift">
                    <div class="theribbon">GIFT</div>
                    <div class="ribbon-background"></div>
                  </div>
                  <!-- /.ribbon-->
                </div>
                <!-- /.product-->
              </div>
              `
});
     document.getElementById("imageIndex").innerHTML=dataIndex