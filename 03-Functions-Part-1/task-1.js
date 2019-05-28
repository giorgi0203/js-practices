
function f(n) {
    if (typeof n != 'number') {
        throw new Error("Error: parameter type is not a Number!");
    }
    return n * n * n;
}

console.log(f(2));
