const axios = require('axios');

class API {
    constructor({ url }) {
        this.url = url;
        this.APP = axios.create({
            timeout: 3000
        });
    }
}

export default API;