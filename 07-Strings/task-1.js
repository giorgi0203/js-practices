
function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error("First parameter must be string")
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); //

