function compose(...args) {
    return function (x) {
        return args.reduceRight((v, f) => f(v), x)
    };
}

console.log(
    compose((str) => {
        return str + 'c';
    }, (str) => {
        return str + 'b';
    })('a')
);
