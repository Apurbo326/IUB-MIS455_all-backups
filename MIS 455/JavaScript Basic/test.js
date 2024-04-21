console.log("Connected...");

quiz1 = 20;
quiz2 = 15;
quiz3 = 18;

avg = (quiz1+quiz2+quiz3) / 3

// displayed on console 
console.log("The Avarage of three quiz is : ", avg);

// displayed in html
document.getElementById("display").innerText = avg;
document.getElementById("display").innerHTML = `The Avarage of three quiz is : <span class="highlight">${avg}</span>`;

// console.log("Connected...");

// var quiz1 = document.getElementById("quiz1").value;
// var quiz2 = document.getElementById("quiz2").value;
// var quiz3 = document.getElementById("quiz3").value;

// var avg = (quiz1+quiz2+quiz3) / 3

// // displayed on console 
// console.log("The Avarage of three quiz is : ", avg);

// // displayed in html
// document.getElementById("display").innerText = avg;
// document.getElementById("display").innerHTML = `The Avarage of three quiz is : <span class="highlight">${avg}</span>`;