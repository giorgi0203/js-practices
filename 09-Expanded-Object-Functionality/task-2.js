Object.prototype.mergeDeepRight = function (source) {
    t(source);
    data = this;
    function t(obj) {
        let keyes = Object.keys(obj);
        keyes.forEach((item) => {
            if (typeof obj[item] == 'object') {
                t(obj[item])
            } else {
                Object.defineProperty(data, item, { value: Object.getOwnPropertyDescriptor(obj, item).value });
            }
        });
        return;
    }
}
Object.defineProperty(Object.prototype, 'mergeDeepRight', { enumerable: false });


const data = {
    name: 'fred',
    age: 10,
    contact: {
        email: 'moo@example.com',
        meta: {
            verified: true,
            tags: ['important']
        }
    }
};

data.mergeDeepRight({
    age: 40,
    contact: {
        email: 'baa@example.com',
        favorite: true,
        meta: {
            tags: ['vip']
        }
    }
});