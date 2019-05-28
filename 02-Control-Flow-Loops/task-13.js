var arr = [2, -5, 9, -15, 0, -4];
var sumPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumPositive += arr[i];
  }
}
console.log(sumPositive);
