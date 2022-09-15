
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
    // console.log("hi")
    if(shoppingCartIn.style.display == ("") ){
        shoppingCartIn.style.display= "none"


    }
})



// adding to the cart
for(i=0; i<addtocarts.length; i++ ){
    var shopItemBtn = addtocarts[i];
    shopItemBtn.addEventListener("click", addtocartClicked);
}

function addtocartClicked(event) {
    var button= event.target;
    var itemBought= button.parentElement.parentElement;
    // console.log(itemBought);
    var itemName= itemBought.getElementsByClassName("producttittle")[0].innerHTML;
    var itemPrice= itemBought.getElementsByClassName("price")[0].innerHTML;
    var itemImg= itemBought.getElementsByClassName("propic")[0].src;
    console.log(itemImg,itemPrice,itemName);
    addItemDetailsToCart(itemImg,itemPrice,itemName);
}

function addItemDetailsToCart(itemImg,itemPrice,itemName) {
    var cartDetails= document.createElement("div")
    cartDetails.classList.add("cart-detail")
    var cartConten= document.getElementsByClassName("shoppingCart")[0];
    var cartItemName= document.getElementsByClassName("cart-product-name")
    for(i=0; i<cartItemName.length; i++){
        if(cartItemName[i].innerText==itemName){
            alert("This item is already added to your cart");
            return
        }
    }
        

    var cartDetailsContents=`
    <div class="cart-content">

        <img class="cart-img " src="${itemImg}" alt="">
        <div class="detail-box">
        <div class="cart-product-name">${itemName}</div>
        <div class="cart-product-price">${itemPrice}</div>
            <input type="number" value="1" class="cart-product-qty">
            <!-- remove from cart button -->
            <i class="remove-icon fa fa-trash"></i>

        </div>
    </div>
`
    cartDetails.innerHTML= cartDetailsContents

    cartConten.appendChild(cartDetails)
   
}   