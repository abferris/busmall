'use strict'
var past =[.25,.25,.25];
var allProducts = [];
var productA= document.getElementById('productA');
var productB= document.getElementById('productB');
var productC= document.getElementById('productC');
var results=document.getElementById('results')
var productNames=['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var votes=0;

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
  for(var k=0; k<3; k++){
    obj[past[k]]=true;
  }
  
  for(var i=0; i<3; i++){
    var random = Math.floor(Math.random()*allProducts.length);
    while (obj[random]){
      random = Math.floor(Math.random()*allProducts.length);
    }
    three.push(random);
    obj[random]=true; 
      
 }
  

  productA.src= allProducts[three[0]].filepath;
  productA.alt= allProducts[three[0]].name;
  productA.title= allProducts[three[0]].name;
  productB.src= allProducts[three[1]].filepath;
  productB.alt= allProducts[three[1]].name;
  productB.title= allProducts[three[1]].name;
  productC.src= allProducts[three[2]].filepath;
  productC.alt= allProducts[three[2]].name;
  productC.title= allProducts[three[2]].name;
  past = three;
  console.log(past);
}

showRandomProducts();


productA.addEventListener('click',handleClick)
productB.addEventListener('click',handleClick)
productC.addEventListener('click',handleClick)


 function makeList(){
   for (var i=0; i<allProducts.length; i++){
   var ulEL = document.getElementById('results');
   var liEl = document.createElement('li');
   liEl.textContent= `${allProducts[i].title} has ${allProducts[i].chosen} votes`;
   ulEL.appendChild(liEl);
   }
 }

console.log(votes);
function handleClick(event){
  // console.log('clicked')
  if(votes<25){
    var h2 = document.getElementById('instruction');
    h2.textContent= "Click which you would be most likely purchase";
    for (var i=0; i<allProducts.length; i++){
      if (event.target.title===allProducts[i].name){
      allProducts[i].chosen++;
      votes++;
      // console.table(allProducts);
      }
    }
    showRandomProducts()
  }
  console.log(votes);
}

// (votes=25){
// var h2 = document.getElementById('instruction');
// h2.textContent= "Results";
// productA.src= '';
// productA.alt= '';
// productA.title= '';
// productB.src= '';
// productB.alt= '';
// productB.title= '';
// productC.src= '';
// productC.alt= '';
// productC.title= '';
// makeList();
// console.table(allProducts); 
// }