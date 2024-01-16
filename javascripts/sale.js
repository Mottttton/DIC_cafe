const idElement = document.getElementById("product");
const quantityElement = document.getElementById("number");
const products = [
  {
    productID: 1,
    productName: "オリジナルブレンド200g",
    productPrice: 500,
  },
  {
    productID: 2,
    productName: "オリジナルブレンド500g",
    productPrice: 900,
  },
  {
    productID: 3,
    productName: "スペシャルブレンド200g",
    productPrice: 700,
  },
  {
    productID: 4,
    productName: "スペシャルブレンド500g",
    productPrice: 1200,
  },
];
let purchases = [];

function add() {
  const id = parseInt(idElement.value);
  const qty = parseInt(quantityElement.value);

  let productIndex = 0;
  for (let i = 0; i < products.length; i++) {
    if(products[i].productID === id) {
      productIndex = i;
    }
  }
  const purchase = {
    id: products[productIndex].productID,
    name: products[productIndex].productName,
    price: products[productIndex].productPrice,
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

  alert(`${display()}\n\n小計${subtotal()}円`);
}

function display() {
  return purchases
    .map((purchase) => {
      return `${purchase.name} ${purchase.price}円が${purchase.quantity}点`;
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

  window.alert(`${display()}\n\n小計は${subtotal()}円、送料は${postage}円です。合計は${sum + postage}円です。`);
  purchases = [];
  idElement.value = "";
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
