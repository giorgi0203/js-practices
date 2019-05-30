
const arr = [2, 4, 3, 2];
function every(arr, cb) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: First parameter required and has to be only array!");
    }
    if (typeof cb !== 'function') {
        throw new Error("Error: Second parameter required and has to be only function!");
    }
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            counter++;
        } else {
            break;
        }
    }
    if (counter == arr.length) {
        return true;
    } else {
        return false;
    }

}

let res = every(arr, function (item, i, arr) {
    console.log('item: ' + item + "; index: " + i + '; array: ' + arr);
    return item > 1;
});
console.log('returned value: ' + res);
