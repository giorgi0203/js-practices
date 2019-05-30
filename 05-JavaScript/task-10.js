
const arr = [2, 4, 6, 88];
function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: First parameter required and has to be only array!");
    }
    if (arr.length === 0) {
        throw new Error("Error: array has to be filled!");
    }
    let reversedArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

let res = reverse([]);
console.log(res);
