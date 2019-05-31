
const arr = [1, 2, 3];
function reduce(arr, cb, _acc) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: First parameter required and has to be only array!");
    }
    if (typeof cb !== 'function') {
        throw new Error("Error: Second parameter required and has to be only function!");
    }
    if (typeof _acc !== 'number' && typeof _acc !== 'string') {
        throw new Error("Error: Third parameter required and has to be only string or number!");
    }
    let acc = _acc;
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

let res = reduce(arr, function (acc, item, i, arr) {
    console.log('acc: ' + (acc + item) + '; item: ' + item + "; index: " + i + '; array: ' + arr);
    return acc + item;
}, 0);
console.log('returned value: ' + res);
