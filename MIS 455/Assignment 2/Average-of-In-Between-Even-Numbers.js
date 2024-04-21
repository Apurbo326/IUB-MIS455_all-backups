var sum = 0;
var count = 0;

for (i=500; i<=565; i++) {
    if(i%2==0){
        console.log(i);
        sum+=i;
        count++;
    }
}

console.log(`Average is : ` + sum/count);