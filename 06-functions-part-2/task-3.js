function mix() {
    let args = arguments;
    let prev;
    let errors = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'function') {
            throw new Error('Error: parameters must be functions')
        }
        try {
            prev = args[i](prev);//call
        } catch (error) {
            errors.push({
                name: error.name,
                message: error.message,
                stack: error.stack,
                level: i
            })
        }

    }
    return {
        'errors': errors,
        'value': prev
    };
}

console.log(
    mix(() => {
        return 0;
    }, (prev) => {
        return prev + 1;
    }, (prev) => {
        throw new RangeError('Range is wrong');
    }, (prev) => {
        return prev * 3;
    })
);
