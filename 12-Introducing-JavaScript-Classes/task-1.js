class Worker {
    constructor(_name, _surname, _rate, _days) {
        this.name = _name;
        this.surname = _surname;
        this.rate = _rate;
        this.days = _days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}
var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31