
function bind(fn, link, ...args) {
    return () => fn.call(link, ...args);
}

const obj = {
    getName: function (message) {
        return `${message}: ${this.name}`;
    }
};

const getName = obj.getName;

const f = bind(getName, { name: 'Pitter' }, 'My name');
console.log(f()); // My name: Pitter
