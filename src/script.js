let product_total = document.getElementById("pdTotalValue");
let shipping_total = document.getElementById("shippingValue")
let total_amount = document.getElementById("total-cart-amount")
let err = document.getElementById("error-throw")

const decreaseNum = (inputVal, itemPrice) => {
  let itemValue = document.getElementById(inputVal);
  let produtPrice = document.getElementById(itemPrice);

  if (itemValue.value <= 0) {
    itemValue.value = 0;
    alert("You need to select at least 1 item!");
  } else {
    itemValue.value = parseInt(itemValue.value) - 1;
    itemValue.style.background = "#fff";
    itemValue.style.color = "#000";
    produtPrice.innerHTML = parseInt(produtPrice.innerHTML) - 800;
    product_total.innerHTML = parseInt(product_total.innerHTML) - 800;
    total_amount.innerHTML = parseInt(total_amount.innerHTML) + parseInt (shipping_total.innerHTML) + 800
  }
};

const increaseNum = (inputVal, itemPrice) => {
  let itemValue = document.getElementById(inputVal);
  let produtPrice = document.getElementById(itemPrice);

  if (itemValue.value >= 5) {
    itemValue.value = 5;
    alert("Maximum 5 items are allowed!");
    itemValue.style.background = "red";
    itemValue.style.color = "#fff";
  } else {
    itemValue.value = parseInt(itemValue.value) + 1;
    produtPrice.innerHTML = parseInt(produtPrice.innerHTML) + 800;
    product_total.innerHTML = parseInt(product_total.innerHTML) + 800;
    total_amount.innerHTML = parseInt(total_amount.innerHTML) + parseInt (shipping_total.innerHTML) + 800
  }
};

const discount_code = (total_val) => {

    let discount_code = document.getElementById("discount-code1")
    let totalPriceCurr = parseInt(total_amount.innerHTML)

    if (discount_code.value === 'anar') {
        let totalPriceNew = totalPriceCurr - 40
        total_amount.innerHTML = totalPriceNew
        err.innerHTML = "Congrats! Code is valid"
        discount_code.value = ""
    
    }else {
        err.innerHTML = "Wrong code! Valid code is anar."
        discount_code.value = ""
    }
}
