
function checkSpam(source, example) {
    if (typeof source !== 'string' || typeof example !== 'string') {
        throw new Error("Parameters must be string")
    }
    let sourceToLower = source.toLowerCase()
    let exampleToLower = example.toLowerCase()
    return sourceToLower.indexOf(exampleToLower) === -1 ? false : true;
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxx@gmail.com', 'XXX')); // false

