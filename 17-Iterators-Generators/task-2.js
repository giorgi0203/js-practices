
class Customers {
    constructor() {
        this.customers = [];
    }

    add(customer) {
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