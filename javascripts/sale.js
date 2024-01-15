const priceElement = document.getElementById("product");
const quantityElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = parseInt(priceElement.value);
  const qty = parseInt(quantityElement.value);
  const purchase = {
    price: price,
    quantity: qty,
  };
  purchases.push(purchase);
  alert(display(purchases));
}

function display(cartItems) {
  let string = "";
  for (cartItem of cartItems) {
    string += `${cartItem.price}円が${cartItem.quantity}点\n`;
  }
  string += "\n小計は" + subtotal(cartItems) + "円です";
  return string;
}

function subtotal(cartItems) {
  let currentSum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    currentSum += cartItems[i].price * cartItems[i].quantity;
  }
  return currentSum;
}

function calc() {
  let sum = 0;
  let postage;

  sum = subtotal(purchases);
  postage = calcPostageFromPurchase(sum);

  window.alert(`送料は${postage}円です。合計は${sum + postage}円です。`);
  purchases = [];
  priceElement.value = "";
  quantityElement.value = "";
}

function calcPostageFromPurchase(purchasePrice){
  if (purchasePrice >= 3000 || purchasePrice === 0) {
    return postage = 0;
  } else if (purchasePrice >= 2000) {
    return postage = 250;
  } else {
    return postage = 500;
  }
}