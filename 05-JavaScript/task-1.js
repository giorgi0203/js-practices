
const arr = [2, 4, 6, 88];
function forEach(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: parameter type should be an array!");
    }
    if (typeof cb !== 'function') {
        throw new Error("Error: second parameter type should be an function!");
    }
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

let res = forEach(arr, function (item, i, arr) {
    console.log('item: ' + item + "; index: " + i + '; array: ' + arr);
});
console.log('returned value: '+res);
