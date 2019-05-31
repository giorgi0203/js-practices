function compose(...args) {
    return function (x) {
        return args.reduceRight((v, f) => {
            if (typeof f !== 'function') {
                throw new Error('Error: parameters must be functions')
            }
            return f(v);
        }, x)
    };
}

console.log(
    compose((str) => {
        return str + 'c';
    }, (str) => {
        return str + 'b';
    })('a')
);
