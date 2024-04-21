var student = {name: "Rafsan Khan",
                Age: 34,
                Address: "House 432, Banani, Rd-11",

                Marks: [40, 33, 80, 93, 12, 46]}

var sum = 0;

for (i=0; i<=(student.Marks.length-1); i++) {
    sum += student.Marks[i];
}

console.log(`The average Marks of the student is : ` + sum/student.Marks.length);