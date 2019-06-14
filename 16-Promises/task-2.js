
function getCustomers(persons, countries) {
    const promise = new Promise(function (resolve, reject) {
        let flag = false;
        let filtered = [];
        persons.forEach(person => {
            if (person.verified) {
                let index = countries.find(el => el.id === person.id);
                if (index) {
                    filtered.push({ ...person, ...index });
                } else {
                    reject(`We don't have information about country for this customer: ${person.name}`);
                }
            }
        });
        resolve(filtered);
    });
    return promise;
}
const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A1',
        name: 'alex',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: '1',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(JSON.stringify(customers)))
    .catch(error => console.log(error))