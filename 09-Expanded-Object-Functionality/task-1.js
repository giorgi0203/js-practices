Object.prototype.extend = function (source) {
    let keyes = Object.keys(source);
    keyes.forEach((item) => {
        if (!this.hasOwnProperty(item)) {
            Object.defineProperty(this, item, Object.getOwnPropertyDescriptor(source, item));
        }
    });
}
Object.defineProperty(Object.prototype, 'extend', { enumerable: false });

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };
source.__proto__ = { c: 'c' }
Object.defineProperty(source, 'b', { writable: false, configurable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b'));