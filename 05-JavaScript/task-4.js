
const arr = [2, 4, 3, 2];
function some(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: First parameter required and has to be only array!");
    }
    if (typeof cb !== 'function') {
        throw new Error("Error: Second parameter required and has to be only function!");
    }
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let res = some(arr, function (item, i, arr) {
    console.log('item: ' + item + "; index: " + i + '; array: ' + arr);
    return item > 5;
});
console.log('returned value: ' + res);
