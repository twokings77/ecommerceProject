
var shoppingbag= document.querySelector(".shoppingbag");
var addtocarts= document.querySelectorAll(".addtocart");
var shoppingCartIn= document.querySelector(".shoppingCart");

// let productCount=cartbox.getAttribute("data-product-count");
for(addtocart of addtocarts){
    addtocart.onclick = (e)=>{
        // console.log(e.target);
    var productCount= Number (shoppingbag.getAttribute('data-product-count')) || 0;
    shoppingbag.setAttribute("data-product-count", productCount +1)
    }
}


// display shopping cart
    shoppingCartIn.style.display= "none";
    shoppingbag.addEventListener("click",()=>{
        if(shoppingCartIn.style.display == ("none") ){
            shoppingCartIn.style.display= "";


        }
    })
     
        
// close shopping cart
var closeShoppingCart= document.querySelector(".close-btn");
closeShoppingCart.addEventListener("click",()=>{
    console.log("hi")
    if(shoppingCartIn.style.display == ("") ){
        shoppingCartIn.style.display= "none"


    }
})