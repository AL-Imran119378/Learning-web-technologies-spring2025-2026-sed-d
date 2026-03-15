const unitPrice = 1000;

const quantityInput = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

quantityInput.addEventListener("input", function () {

    let quantity = parseInt(quantityInput.value);

    if (quantity < 0 || isNaN(quantity)) {
        quantity = 0;
        quantityInput.value = 0;
    }

    let total = unitPrice * quantity;

    totalPrice.value = total;

    if (total > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }

});