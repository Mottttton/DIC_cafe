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
}

function calc() {
  let sum = 0;
  let postage;
  for(let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].quantity;
  }
  if(sum >= 3000 || sum === 0) {
    postage = 0;
  } else if(sum >= 2000) {
    postage = 250;
  } else {
    postage = 500
  }
  window.alert(`送料は${postage}円です。合計は${sum + postage}円です。`)
  purchases = [];
  priceElement.value = "";
  quantityElement.value = "";
}
