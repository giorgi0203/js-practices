
function isPositive(n) {
    if (typeof n !== 'number') {
        throw new Error('Error: parameter type is not a Number');
    }

    return n > 0 ? true : false;
}

function f(arr) {
    let posArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPositive(arr[i])) {
            posArr.push(arr[i]);
        }
    }
    return posArr;
}

console.log(f([1, 2, -4, 3, -9, -1, 7]));
console.log(f([1, 2, -4, 3, -9, -1, 's']));