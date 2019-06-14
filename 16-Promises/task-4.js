const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';
class Countries {
    constructor(url) {
        this.url = url;
    }
    send(id) {
        return new Promise((resolve, reject) => {
            get(url + `?size=${id}`, (error, meta, body) => {
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
    }
}

const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();