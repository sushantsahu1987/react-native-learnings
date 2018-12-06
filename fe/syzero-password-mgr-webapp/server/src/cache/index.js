const redis = require('redis');

const init = (options) => {
    return redis.createClient(options);
};

const save = (key, value) => {

    return new Promise((resolve, reject)=> {

    });

};

const get = () => {
    
};

const Cache = {}
Cache.init = init
Cache.save = save
Cache.get = get


module.exports = Cache;