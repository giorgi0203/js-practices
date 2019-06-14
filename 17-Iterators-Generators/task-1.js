
class Customers {
    constructor() {
        this.customers = [];
    }

    add(customer) {
        if (typeof customer !== 'object') {
            throw new Error('parameter must be object');
        }
        if (customer.name == undefined || typeof customer.name !== 'sting') {
            throw new Error('{name} is required and must be string');
        }
        if (customer.verified !== undefined && typeof customer.verified !== 'boolean') {
            throw new Error('{verified} is optional and must be boolean');
        }
        this.customers.push(customer);
    }
    [Symbol.iterator]() {
        let customers = this.customers.filter((item) => {
            return item.verified == undefined || item.verified == false ? false : true;
        });
        let count = 0;
        let isDone = false;

        let next = () => {

            if (count >= customers.length) {
                isDone = true;
            }
            let person = customers[count++];
            return { done: isDone, value: person };
        }

        return { next };
    };
}

const customers = new Customers();
customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}