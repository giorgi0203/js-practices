
function f() {
    let S = 0;
    for (const arg of arguments) {
        if (typeof arg !== 'number') {
            throw new Error("Error: all parameters type should be a Number");
        }

        S += arg;
    }
    return S;
}


console.log(f(1, 2, 3));
console.log(f(1, 1, 1, 1, 1, 1, 1, 1));
console.log(f(1, 2, 's', 4));

