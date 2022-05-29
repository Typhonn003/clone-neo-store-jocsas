window.onload = function () {
    writePrice();
    
}

var writePrice = function() {
    price = document.querySelectorAll(".price");
    
    price.forEach(element => {
        element.innerHTML = generatePrice();
    });
}

var generatePrice = function () {
    n = '$' + ((Math.random() * (20 - 5)) + 5).toFixed(2)
    return n;
}