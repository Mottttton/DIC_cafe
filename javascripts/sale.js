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
  let isNewItem = true;

  purchases.forEach((item) => {
    if (item.price === purchase.price) {
      isNewItem = false;
    }
  });

  if (purchases.length < 1 || isNewItem) {
    purchases.push(purchase);
  } else {
    for (let i = 0; i < purchases.length; i++) {
      if (purchases[i].price === purchase.price) {
        purchases[i].quantity += purchase.quantity;
      }
    }
  }

  alert(`${display()}\n小計${subtotal()}円`);
}

function display() {
  return purchases
    .map((purchase) => {
      return `${purchase.price}円が${purchase.quantity}点`;
    })
    .join("\n");
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.quantity;
  }, 0);
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

function calcPostageFromPurchase(purchasePrice) {
  if (purchasePrice >= 3000 || purchasePrice === 0) {
    return (postage = 0);
  } else if (purchasePrice >= 2000) {
    return (postage = 250);
  } else {
    return (postage = 500);
  }
}
