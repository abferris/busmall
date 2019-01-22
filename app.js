'use strict'

var allProducts = [];
var productA= document.getElementById('productA');
var productB= document.getElementById('productB');
var productC= document.getElementById('productC');
var productNames=['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function ProductPic(name){
  this.filepath = `img/${name}.jpg`;
  this.name=name;
  this.chosen=0;
  allProducts.push(this);
}

for(var i=0; i<productNames.length; i++){
  new ProductPic(`${productNames[i]}`);
}

function showRandomProducts() {
  var three = [];
  var obj ={};
  //Iterate 3 times
  for(var i=0; i<3; i++){
    //choose random object
    var duplicate=true
    var random = Math.floor(Math.random()*allProducts.length);
    console.log(random)
      //if it is true with object hash
      if (obj[random]){
         //make new random number
          random = Math.floor(Math.random()*allProducts.length);
        }
         else{
         //push value into array
          three.push(random);
         //set true with object hash
         obj[random]=true; 
         duplicate=false;
      }
    }
  
    console.log(three);

  productA.src= allProducts[three[0]].filepath;
  productA.alt= allProducts[three[0]].name;
  productA.title= allProducts[three[0]].name;
  console.log(productB)
  productB.src= allProducts[three[1]].filepath;
  productB.alt= allProducts[three[1]].name;
  productB.title= allProducts[three[1]].name;
  productC.src= allProducts[three[2]].filepath;
  productC.alt= allProducts[three[2]].name;
  productC.title= allProducts[three[2]].name;
}

showRandomProducts();

// imgDiv.addEventListener('click',handleClick)

function handleClick(event){
    picked=event.target
    showRandomProducts();
}