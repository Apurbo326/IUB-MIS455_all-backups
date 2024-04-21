function findTotal () {
    var price1 = parseInt(document.getElementById("p1Box").value);
    var price2 = parseFloat(document.getElementById("p2Box").value);

    // console.log(price1, price2);

    var total = price1 + price2
    
    // console.log("The total price is : ", total)

    document.getElementById("display").innerHTML = `The Total Price is <strong>${total}</strong> BDT`;
}