function calculate () {
    var courseTaken = parseInt(document.getElementById("courseTaken").value);
    var courseFee = parseFloat(document.getElementById("feesPerCourse").value);

    // console.log(courseFee, courseTaken);

    var total = (courseTaken*courseFee);
    // var discount = total*.20;

    if (total >= 50000) {
        var discount = total*.20;
    }else{
        var discount = total*.10;
    }

    var totalPayable = total - discount;

    document.getElementById("displayDiscount").value = `${discount} BDT`;
    document.getElementById("displayTotalpay").value = `${totalPayable} BDT`;
}