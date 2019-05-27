var arr = [1, 2, 3, 4];
var sumEven = 0;

for (let i = 0; i < arr.length; i++) {
    sumEven += (arr[i] % 2 == 0) ? arr[i] : 0;
}

console.log(sumEven);