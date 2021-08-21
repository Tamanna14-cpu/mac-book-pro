// dafualt
function defaultCost(item) {
    document.getElementById(item + '-cost').innerText = 00;
    totalCost();
}

// 16gb memory & 1tb storage
function moreCost(storage) {
    document.getElementById(storage + '-cost').innerText = 180;
    totalCost();
}


function costCalculation(items) {
    const cost = document.getElementById(items + '-cost').innerText;
    const costNumber = parseFloat(cost);
    return costNumber;
}

// total cost
function totalCost() {
    const defaultCost = costCalculation('default');
    const memoryCost = costCalculation('memory');
    const storageCost = costCalculation('storage');
    const deliveryCost = costCalculation('delivery')
    const totalCost = defaultCost + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total').innerText = totalCost;
}


// memory
document.getElementById('memory-normal').addEventListener('click', function () {
    defaultCost('memory');
})
document.getElementById('memory-more').addEventListener('click', function () {
    moreCost('memory');
})


// storage
document.getElementById('storage-normal').addEventListener('click', function () {
    defaultCost('storage')
})
document.getElementById('storage-extra').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalCost();
})
document.getElementById('storage-more').addEventListener('click', function () {
    moreCost('storage');
})



// delivery
document.getElementById('delivery-normal').addEventListener('click', function () {
    defaultCost('delivery');
})
document.getElementById('delivery-special').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    totalCost();
})



// promo code apply
function applyButton() {
    const promoCode = document.getElementById('promo-code').value;
    const totalPrice = document.getElementById('total-cost').innerText;
    const totalPriceNumber = parseFloat(totalPrice);
    if (promoCode == 'stevekaku') {
        const discount = totalPriceNumber * 0.2;
        document.getElementById('total').innerText = (totalPriceNumber - discount).toFixed(1);

        // clear
        document.getElementById('promo-code').value = '';
    }
}