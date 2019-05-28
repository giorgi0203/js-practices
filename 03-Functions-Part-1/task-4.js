
function f(n) {
    let arr = ['', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი', 'კვირა'];
    if (typeof n != 'number') {
        throw new Error("Error: parameter type is not a Number");
    }
    if (n < 1 || n > 7) {
        throw new Error("Error: parameter should be in the range of 1 to 7");
    }

    return arr[n];
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));
