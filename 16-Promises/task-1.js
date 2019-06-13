function isCustomerVerified(person) {
    const promise = new Promise(function (resolve, reject) {
        if (person.verified) {
            resolve(true);
        } else {
            reject("Customer is not verified");
        }

    });
    return promise;
}
const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))

isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified