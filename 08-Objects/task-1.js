'use strict';

const person = {
    get salary() {
        let today = new Date();
        let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

        return lastDayOfMonth - today.getDate() > 20 ? "good salary" : "bad salary";
    },
};

console.log(person.salary); // good salary

