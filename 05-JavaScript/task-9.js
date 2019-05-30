
function arrayFill(val, lenght) {
    if (!Array.isArray(val) && typeof val !== 'number' && typeof val !== 'string') {
        throw new Error("Error: First parameter required and has to be only number, string, object array!");
    }
    if (typeof lenght !== 'number') {
        throw new Error("Error: Second parameter required and has to be only number!");
    }
    let arr = [];
    for (let i = 0; i < lenght; i++) {
        arr.push(val);
    }
    return arr;
}

let res = arrayFill('x', 5);
let res1 = arrayFill([1, 4], 5);
let res3 = arrayFill({}, 5);
console.log(res);
console.log(res1);
