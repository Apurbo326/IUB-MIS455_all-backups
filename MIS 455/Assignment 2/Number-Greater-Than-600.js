var array = [434, 545, 231, 7675, 543, 678];
var count = 0;

for (i=0; i<=(array.length-1); i++) {
    if (array[i]>600) {
        console.log(array[i]);
        count++;
    }
}

console.log(`The total greater numbers are : ` + count);