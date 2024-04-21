function calculate() {
    unit = parseFloat(document.getElementById("input").value);

    var rate1= 0.50;
    var rate2= 0.75;
    var rate3= 1.20;
    var rate4= 1.50;
    var serviceChargeRate = 0.20;

    var bill = 0;
    var serviceCharge = 0;
    var totalBill = 0; 

    if (unit <= 50) {
        bill = unit * rate1;
    } else if (unit <= 150) {
        bill = 50 * rate1 + (unit - 50) * rate2;
    } else if (unit <= 250) {
        bill = 50 * rate1 + 100 * rate2 + (unit - 150) * rate3;
    } else {
        bill = 50 * rate1 + 100 * rate2 + 100 * rate3 + (unit - 250) * rate4;
    }

    serviceCharge = bill * serviceChargeRate;
    totalBill = bill + serviceCharge;

    document.getElementById("display").value = totalBill;
}