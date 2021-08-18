// function for getting the price;

function getPrice() {

    let total = [];

    const phone = total.push(parseFloat(document.getElementById('phone-price').innerText));

    const phoneCase = total.push(parseFloat(document.getElementById('case-price').innerText));

    return total;
}

// Function for getting the present quantity, price and update it accordingly;

function productOrder(inputID, addition, priceID, price) {

    const qtyID = document.getElementById(inputID);
    const productQty = parseInt(document.getElementById(inputID).value);

    let updatedQty;

    if (addition == true) {

        updatedQty = productQty + 1;
        qtyID.value = updatedQty;

    } else if (addition == false && productQty > 0) {

        updatedQty = productQty - 1;
        qtyID.value = updatedQty;
    } else {
        return productOrder;
    }

    // Update the price

    document.getElementById(priceID).innerText = price * updatedQty;
}


//Event handler for phone quantity and product total increase;

document.getElementById('phone-increase').addEventListener('click', function () {

    productOrder('phone-input', true, 'phone-price', 1219);
    calcTotal()
})

//Event handler for phone quantity and product total decrease;

document.getElementById('phone-decrease').addEventListener('click', function () {

    productOrder('phone-input', false, 'phone-price', 1219);
    calcTotal()
})

//Event handler for phone case quantity and product total increase;

document.getElementById('case-increase').addEventListener('click', function () {

    productOrder('case-input', true, 'case-price', 59);
    calcTotal()
})

//Event handler for phone case quantity and product price decrease;

document.getElementById('case-decrease').addEventListener('click', function () {

    productOrder('case-input', false, 'case-price', 59);
    calcTotal()
});


//Function for calculating the total and taxes;

function calcTotal() {

    const productTotal = getPrice();

    let subTotal = productTotal[0] + productTotal[1];

    let tax = (15 * subTotal) / 100;

    let total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

    return;
}



