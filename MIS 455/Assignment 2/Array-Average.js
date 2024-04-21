var array = [43, 654, 34, 60, 532, 46, 300];

var sum = 0;

for (i=0; i<=(array.length-1); i++) {
    sum += array[i];
}

console.log(`Avarage of the array is : ` + sum/array.length);