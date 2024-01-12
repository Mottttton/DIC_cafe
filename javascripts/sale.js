const priceElement = document.getElementById("product");
const quantityElement = document.getElementById("number");
let purchases = [];

function calc() {
  let sum = 0;
  for(let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].quantity;
  }
  window.alert(`合計は${sum}円です。`)
  purchases = [];
  priceElement.value = "";
  quantityElement.value = "";
}

function add() {
  const price = parseInt(priceElement.value);
  const qty = parseInt(quantityElement.value);
  const purchase = {
    price: price,
    quantity: qty,
  };
  purchases.push(purchase);
}