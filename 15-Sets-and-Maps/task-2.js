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

    validateQuery(query) {
        if (typeof query !== 'object') {
            throw new Error('parameter must be object');
        }
        if (typeof query.age == 'object' && Object.getOwnPropertyNames(query.age).length == 0) {
            throw new Error('parameter must not be empty object1');
        }
        if (typeof query.salary === 'object' && Object.getOwnPropertyNames(query.salary).length == 0) {
            throw new Error('parameter must not be empty object');
        }
        let {
            name,
            age: { min: minAge, max: maxAge } = {},
            country,
            salary: { min: minSalary, max: maxSalary } = {}
        } = query;
        if (name != undefined && typeof name !== 'string') {
            throw new Error('{name} field must be type string');
        }
        if (minAge != undefined && typeof minAge !== 'number') {
            throw new Error('{age.min} field must be type number');
        }
        if (maxAge != undefined && typeof maxAge !== 'number') {
            throw new Error('{age.max} field must be type number');
        }
        if (country != undefined && typeof country !== 'string') {
            throw new Error('{country} field must be type string');
        }
        if (minSalary != undefined && typeof minSalary !== 'number') {
            throw new Error('{salary.min} field must be type number');
        }
        if (maxSalary != undefined && typeof maxSalary !== 'number') {
            throw new Error('{salary.max} field must be type number');
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
        return Array.from(this.persons.entries()).map((item) => {
            return item[1];
        });
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

    find(query) {
        this.validateQuery(query);
        return new Map(Array.from(this.persons).filter((item) => {
            let res = false;
            if (query.name) {
                if (query.name === item[1].name) {
                    res = true;
                } else {
                    return false;
                }
            }
            if (query.country) {
                if (query.country === item[1].country) {
                    res = true;
                } else {
                    return false;
                }
            }
            if (query.age && typeof query.age == 'object') {
                if (query.age.min && query.age.max && typeof query.age.min == 'number' && typeof query.age.max == 'number') {
                    if (item[1].age > query.age.min && item[1].age < query.age.max) {
                        res = true;
                    } else {
                        return false;
                    }
                } else if (query.age.min && typeof query.age.min == 'number') {
                    if (item[1].age > query.age.min) {
                        res = true;
                    } else {
                        return false;
                    }
                } else if (query.age.max && typeof query.age.max == 'number') {
                    if (item[1].age < query.age.max) {
                        res = true;
                    } else {
                        return false;
                    }
                }
            }
            if (query.salary && typeof query.salary == 'object') {
                if (query.salary.min && query.salary.max && typeof query.salary.min == 'number' && typeof query.salary.max == 'number') {
                    if (item[1].salary > query.salary.min && item[1].salary < query.salary.max) {
                        res = true;
                    } else {
                        return false;
                    }
                } else if (query.salary.min && typeof query.salary.min == 'number') {
                    if (item[1].salary > query.salary.min) {
                        res = true;
                    } else {
                        return false;
                    }
                } else if (query.salary.max && typeof query.salary.max == 'number') {
                    if (item[1].salary < query.salary.max) {
                        res = true;
                    } else {
                        return false;
                    }
                }
            }
            return res;
        }))
    }
}
const db = new DB();

const person1 = {
    name: 'Pitter', // required field with type string
    age: 22, // required field with type number
    country: 'ua', // required field with type string
    salary: 500 // required field with type number
};
const person2 = {
    name: 'Pitter2', // required field with type string
    age: 45, // required field with type number
    country: 'ge', // required field with type string
    salary: 9099999 // required field with type number
};

const person3 = {
    name: 'Pitter3', // required field with type string
    age: 45, // required field with type number
    country: 'ua', // required field with type string
    salary: 1000 // required field with type number
};


let id1 = db.create(person1);
let id2 = db.create(person2);
let id3 = db.create(person3);
const query = {
    country: 'ua',
    // age: {
    //     // min: 21
    // },
    salary: {
        min: 300,
        // max: 600
    }
};
const query2 = {
    country: 'ua',
};
const query3 = {
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query); // array of users
console.log(JSON.stringify((Array.from(customers))));

const customers2 = db.find(query2); // array of users
console.log(JSON.stringify((Array.from(customers2))));

const customers3 = db.find(query3); // array of users
console.log(JSON.stringify((Array.from(customers3))));