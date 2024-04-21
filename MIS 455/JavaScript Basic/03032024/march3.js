// number type variables
var num1= 3232;
let num2= 3.55;

// string type variables
var person = "ABC Khan";
var grade = "B+";
var address = "H827, F-block, Afroza Begum Road";

// array type variable
var marks = [12, 10, 5, 20, 14, 18];
var items = ["pen", "pencil", "A4 paper","Eraser"];
console.log("Marks array has total :", marks.length, "elements");
console.log("Index 0 of item is", items[0]);

// object type variables
var student1 = {namme: "Apurbo Karmokar",
                id: 2030359,
                address: "H827, F-block, Afroza Begum Road",
                bloodGr: "O-",
                QuizMarks: [12,20,16]};

console.log(student1.address);
console.log(student1.QuizMarks);
console.table(student1.QuizMarks);
console.log(student1.QuizMarks[2]);

// concept of LOOP
var num3;
for (num3=1; num3<=10; num3++){
    console.log(num3);
};

var num4=0;
while (num4<=5){
    console.log(num4);
    num4++;
};

var numArray = [100, 200, 314, 427];
var sum=0;
for(i=1; i<=(numArray.length); i++){
    console.log(i,"th number is : ", numArray[i-1]);
    sum=sum+numArray[i-1];
};
console.log("------------------------")
console.log("The total is : ",sum);
console.log("Avarage : ", sum/numArray.length);

// finding even or odd number
var input1=11;

if (input1 % 2 ==0){
    console.log("Congratulations, ", input1, "is an even number");
}else{
    console.log("Congratulations, ", input1, "is an odd number");
};