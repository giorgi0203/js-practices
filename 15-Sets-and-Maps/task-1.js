class DB {
    constructor() {
        this.persons = new Map();
    }
    validate(person) {
        if (typeof person !== 'object') {
            throw new Error('parameter must be object');
        }
        let {
            name,
            age,
            country,
            salary
        } = person;
        if (name == undefined || typeof name !== 'string') {
            throw new Error('{name} required field with type string');
        }
        if (age == undefined || typeof age !== 'number') {
            throw new Error('{age} required field with type number');
        }
        if (country == undefined || typeof country !== 'string') {
            throw new Error('{country} required field with type string');
        }
        if (salary == undefined || typeof salary !== 'number') {
            throw new Error('{salary} required field with type number');
        }
    }
    validateUpdate(person) {
        if (typeof person !== 'object') {
            throw new Error('parameter must be object');
        }
        let {
            name,
            age,
            country,
            salary
        } = person;
        if (name != undefined && typeof name !== 'string') {
            throw new Error('{name} field must be type string');
        }
        if (age != undefined && typeof age !== 'number') {
            throw new Error('{age} field must be type number');
        }
        if (country != undefined && typeof country !== 'string') {
            throw new Error('{country} field must be type string');
        }
        if (salary != undefined && typeof salary !== 'number') {
            throw new Error('{salary} field must be type number');
        }
    }
    create(person) {
        //validate
        this.validate(person);

        let last = Array.from(this.persons.keys())[0];

        let key = last != undefined ? parseInt(last) + 1 : 0;
        while (this.persons.has(key.toString())) {
            key = key + 1;
        }
        this.persons.set(key.toString(), person);
        return key.toString();
    }
    read(id) {
        //validate
        if (typeof id !== 'string' || id == undefined) {
            throw new Error('{id} parameter required and must be string');
        }
        let person = this.persons.get(id);
        return person == undefined ? null : {
            id,
            ...person
        };
    }
    readAll(...args) {
        //validate
        if (args.length > 0) {
            throw new Error('function readAll() don\'t takes parameters');
        }
        return Array.from(this.persons.entries());
    }
    update(id, person) {
        //validate
        this.validateUpdate(person)
        if (!this.persons.has(id)) {
            throw new Error('{id} there is no such element in map');
        }
        this.persons.set(id, { ...this.persons.get(id), ...person })
        return id;
    }

    delete(id) {
        if (typeof id !== 'string') {
            throw new Error('{id} must be string');
        }
        if (!this.persons.has(id)) {
            throw new Error('{id} there is no such element in map');
        }
        let res = this.persons.delete(id);
        return res;
    }
}
const db = new DB();

const person1 = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};


let id1 = db.create(person1);
let id2 = db.create(person1);
let id3 = db.create(person1);
console.log(id1);
console.log(id2);
console.log(id3);

// const customer = db.read(id1);
// console.log(customer);

const customers = db.readAll(); // array of users
console.log("all persons: " + JSON.stringify(customers));
console.log("before update: " + JSON.stringify(db.read(id1)));
db.update(id1, { age: 22, name: "Giorgi" }); // id
console.log("after update: " + JSON.stringify(db.read(id1)));
// db.update(id1, {}); // id

console.log("before delete: " + db.readAll().length);
console.log("dlete result: " + db.delete(id1)); // true
console.log("after delete: " + db.readAll().length);
