
function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error("First parameter must be string")
    }

    return parseInt(source.replace('$',''));
}

console.log(extractCurrencyValue('1$20')); // 120

