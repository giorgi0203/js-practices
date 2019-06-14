
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
    *[Symbol.iterator]() {
        for (const item of this.customers) {
            if (item.verified) {
                yield item;
            }
        }
    }
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