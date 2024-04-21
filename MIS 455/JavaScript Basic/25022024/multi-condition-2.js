function calculate() {
    var marks = parseFloat(document.getElementById("marksInput").value);
    var displayElement = document.getElementById("display");
    var displayElement2 = document.getElementById("display-2");

    if (isNaN(marks) || marks>100 || marks<0) {
        displayElement.textContent = "Please enter valid marks!";
        displayElement2.textContent = "Please enter valid marks!";
    } else if (marks >= 90) {
        displayElement.textContent = "A";
        displayElement2.textContent = "4.00";
    } else if (marks >= 85) {
        displayElement.textContent = "A-";
        displayElement2.textContent = "3.70";
    } else if (marks >= 80) {
        displayElement.textContent = "B+";
        displayElement2.textContent = "3.30";
    } else if (marks >= 75) {
        displayElement.textContent = "B";
        displayElement2.textContent = "3.00";
    } else if (marks >= 70) {
        displayElement.textContent = "B-";
        displayElement2.textContent = "2.70";
    } else if (marks >= 65) {
        displayElement.textContent = "C+";
        displayElement2.textContent = "2.30";
    } else if (marks >= 60) {
        displayElement.textContent = "C";
        displayElement2.textContent = "2.00";
    } else if (marks >= 55) {
        displayElement.textContent = "C-";
        displayElement2.textContent = "1.70";
    } else if (marks >= 50) {
        displayElement.textContent = "D+";
        displayElement2.textContent = "1.30";
    } else if (marks >= 45) {
        displayElement.textContent = "D";
        displayElement2.textContent = "1.00";
    } else {
        displayElement.textContent = "F";
        displayElement2.textContent = "0.00";
    }
}
