var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100) 
 cart.push({[ itemName] : itemPrice })
 console.log(`${itemName} has been added to your cart.`)
return cart
}

function viewCart() {
  var itemName = [] 
  var itemPrice = []
  var itemsAndPrices = []
  for (var i = 0; i < cart.length; i++) {
      itemName.push(Object.keys(cart[i])[0])
      itemPrice.push(Object.values(cart[i])[0])
  }
  if (cart.length === 0) {
   console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${itemName[0]} at $${itemPrice[0]}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${itemName[0]} at $${itemPrice[0]} and ${itemName[1]} at $${itemPrice[1]}.`)
  } else if (cart.length >= 3) {
  for (var a = 0; a < cart.length; a++) {
    if (cart.length -1 === a) {
    itemsAndPrices.push(`and ${itemName[a]} at $${itemPrice[a]}.`)
    } else {
    itemsAndPrices.push(`${itemName[a]} at $${itemPrice[a]}`)
  }
      }
      console.log(`In your cart, you have ${itemsAndPrices.join(", ")}`)
    }
  }
/*
function refactoredViewCart(){
  // declare a new array for storing our strings. 
  for(let i = 0; i < cart.length; i++){
    // loop over each item in cart
    // get the key and value from each item
    // create new string ( a template literal ) with the key and value
    // push string into the array we declared earlier
  }
  
  // control flow
  if ( cart.length == 1){
    // return the first item from the array
  }
  
  if ( == 2){
    // join the items together with an and
  }
  
  if ( 3 or more) {
    // join them together, but separate last one with an and
  }
}
*/

function total() {
  let finalTotal = 0;
  for (var i = 0; i < cart.length; i++) {
  } 
  if (cart.length === 0) {
    return finalTotal
  } else if (cart.length === 1) {
  finalTotal += cart[i]
  return finalTotal
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
