const faker = require('faker');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');

const {
    constants
} = require('../controllers');

const {
    token
} = require('../utils');

const {
    Account,
    dbcontroller,
    db
} = require('../db')


const USER_COUNT = 15;

const init = async () => {

    const users = [];

    _.times(USER_COUNT, () => {
        const uuid = uuidv4();
        const email = faker.internet.email().toLowerCase();
        const password = 'asdef';
        const salt1 = uuidv4();
        const salt2 = uuidv4();

        const acc = new Account({
            uuid,
            email,
            password,
            salt1,
            salt2
        });

        const usercontroller = dbcontroller.save(acc, constants.register_success, constants.register_error);
        users.push(usercontroller);

    });

    for (let usercontroller of users) {
        try {
            const result = await usercontroller;
            console.log(result);
        } catch (err) {
            console.log('user: error');
            console.log(err);
        }
    }

}

const connect = async () => {

    token.init();
    try {
        const result = await db.init();
        init();
    } catch (err) {
        console.log('unable to connect to mongodb')
    }

}

connect();