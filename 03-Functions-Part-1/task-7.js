
function getDivisors(n) {
    let res = [];
    if (typeof n != 'number') {
        throw new Error("Error: parameter type is not a Number!");
    }
    if (n === 0) {
        throw new Error("Error: parameter can't be a 0!");
    }

    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            res.push(i);
        }

    }
    return res;
}

console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));
