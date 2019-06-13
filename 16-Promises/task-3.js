const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';


const send = url =>
    new Promise((resolve, reject) => {
        get(url, (error, meta, body) => {
            if (meta && meta.status == 200) {
                const { data } = JSON.parse(body);
                resolve(data);
            } else if (meta) {
                reject(`have error, status code: ${meta.status}`);
            } else {
                reject(`have error`);
            }

        });
    });

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });