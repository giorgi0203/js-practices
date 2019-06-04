'use strict';

const person = {
    get salary() {
        if (!this.rate) {
            return 0;
        }
        return this.rate * new Date().getDate();
    },
    set salary(val) {
        throw new Error("This value is read-only");
    }
};

Object.defineProperty(person, 'rate', {
    writable: true,
    enumerable: false,
    configurable: false,
});

// delete person.rate;
person.salary = 30
console.log(Object.getOwnPropertyDescriptors(person));
console.log(person.rate); // good salary
console.log(person.salary); // good salary

