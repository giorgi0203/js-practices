var arr = [8, 7, 6, 5, 4, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
// arr.sort((a, b) => a > b);
console.log(arr);
