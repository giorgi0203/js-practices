Object.prototype.mergeDeepRight = function (source) {
    t(source, this);
    function t(obj, data) {
        let keyes = Object.keys(obj);
        keyes.forEach((item) => {
            if (typeof obj[item] == 'object' && !Array.isArray(obj[item])) {
                t(obj[item], data[item])
            } else if (Array.isArray(obj[item])) {
                data[item].push(...obj[item]);
            } else {
                data[item] = obj[item];
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

console.log(data);
