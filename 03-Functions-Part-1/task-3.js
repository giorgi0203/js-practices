
function f(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error("Error: all parameters type should be a Number");
    }
    return (a - b) / c;
}

console.log(f(9, 3, 2));
console.log(f('s', 9, 3));

