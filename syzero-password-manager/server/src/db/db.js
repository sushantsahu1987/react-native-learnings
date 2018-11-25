const mongoose = require('mongoose');
const Account = require('./accounts');
const Credentials = require('./credentials');
const Vault = require('./vault');

const db = {

};

const init = () => {

    return new Promise((resolve, reject) => {
        const MONGO_PWD = process.env.MONGO_PWD;
        const MONGO_USER = process.env.MONGO_USER;
        let mongourl = process.env.MONGO_URL;
        mongourl = mongourl.replace('MONGO_USER', MONGO_USER);
        mongourl = mongourl.replace('MONGO_PWD', MONGO_PWD);
        mongoose.connect(url, {
            useNewUrlParser: true
        });
        const db = mongoose.connection;
        db.on('error', () => {
            reject()
        });
        db.once('open', () => {
            resolve();
        })

    });

}

db.init = init();

module.exports = db;