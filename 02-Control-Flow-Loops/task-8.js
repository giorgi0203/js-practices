var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var sumEven = 0;

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2 == 0) && arr[i] > 3) {
        sumEven += arr[i];
    }
}

console.log(sumEven);