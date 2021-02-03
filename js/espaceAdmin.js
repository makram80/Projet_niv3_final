var products = JSON.parse(localStorage.getItem("products")) || [];

var tbody = document.getElementById("tbody");
var modal = document.getElementById("ModalAdd");

//code image 1ici : 
  var inputFile  = document.getElementById("file");
  inputFile.addEventListener('change', () => {
    console.log("inputfile:",inputFile );
    const file = new FileReader();
    file.readAsDataURL(inputFile.files[0]);     
    file.onload = function () { 
      imgobj = file.result }  
    }); 
//fin code image

function fone(index) {
var inputFile  = document.getElementById("fileUpload"+index);
  console.log("inputfile:",inputFile );
  const file = new FileReader();
  file.readAsDataURL(inputFile.files[0]);     
  file.onload = function () { 
    imgobj = file.result }
};


function add (){
    var name = document.getElementById("name").value
    var prix = document.getElementById("prix").value    
    var stock = document.getElementById("stock").value   
    var obj = {
        //id : Math.round(Math.random() * 1000),
        name : name,
        tag: name,
        price: parseInt(prix),
        inCart: 0,
        stock : parseInt(stock),
        file : imgobj,
        date: ""
        //client: ""
    } 
    products.push(obj)

    localStorage.setItem("products",JSON.stringify(products))  
    fetchall ()
    location.reload()
}

function fetchall() {   
    var data="";
    products.forEach(product => {  
         data+=`
        <tr>
                <td>${product.name}</td>     
                <td>${product.price}</td>
                <td>${product.stock}</td> 
                <td><img src="${product.file}" style="width: 40px"></td>  
                <td><button data-target="#ModalAdd${products.indexOf(product)}" data-toggle="modal" type="button"  class="btn btn-primary">Edit</button></td>
                <td><button type="button" data-target="#ModalAdd" onclick="remove(${products.indexOf(product)})" class="btn btn-primary">Delete</button></td>
        </tr>     

<div class="modal fade" id="ModalAdd${products.indexOf(product)}">
  <div class="modal-dialog">
    <div class="modal-content">
      <form>               
      <div class="modal-body">
        <label>name du produit</label><br>
        <input type="text" value ="${product.name}"    class="form-control" id="name${products.indexOf(product)}" ><br>
        <label>Prix du produit</label><br>
        <input type="number" value ="${product.price}" class="form-control" id="prix${products.indexOf(product)}" ><br>
        <label>stock du produit</label><br>
        <input type="number" value ="${product.stock}" class="form-control" id="stock${products.indexOf(product)}"><br>
        <label>Photo base64</label><br>
        <div class="input-group-prepend"><img src="${product.file}" style="width: 30px">
        <input type="hidden" value="${product.file}"  class="form-control" id="file${products.indexOf(product)}" ><br>
        <input type="file"  class="form-control"  id="fileUpload${products.indexOf(product)}"  onchange="fone(${products.indexOf(product)})">
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
        <button  class="btn btn-primary" onclick="validerEdit(${products.indexOf(product)})">Valider edit</button>
      </div>
    </div>
  </div>
</div>
`
}); // end foreach   
    tbody.innerHTML=data
} // end fetch function

validerEdit=(index)=>{
  let editStock =Number(document.getElementById('stock'+index).value);
  let editPrice =Number(document.getElementById('prix'+index).value);

   products[index].name=  document.getElementById('name'+index).value;
   products[index].stock= editStock;     
   products[index].price= editPrice; 
   if (imgobj) { products[index].file= imgobj; }//else{products[index].file= document.getElementById('file'+index).value; }       

   localStorage.setItem('products',JSON.stringify(products));
   location.reload()
}

remove=(index)=>{       
  products.splice(index,1)
  localStorage.setItem("products",JSON.stringify(products))
  fetchall()
 }

fetchall()

























