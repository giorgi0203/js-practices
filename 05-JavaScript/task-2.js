
const arr = [2, 4, 6, 88];
function filter(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: First parameter required and has to be only array!");
    }
    if (typeof cb !== 'function') {
        throw new Error("Error: Second parameter required and has to be only function!");
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let res = filter(arr, function (item, i, arr) {
    console.log('item: ' + item + "; index: " + i + '; array: ' + arr);
    return item > 4;
});
console.log('returned value: ' + res);
