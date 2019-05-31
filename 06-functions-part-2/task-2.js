function mix() {
    let args = arguments;
    let prev;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'function') {
            throw new Error('Error: parameters must be functions')
        }
        prev = args[i](prev);//call
    }
    return prev;
}

console.log(
    mix(() => {
        return 0;
    }, (prev) => {
        return prev + 1;
    }, (prev) => {
        return prev * 2;
    }) // 2
);
