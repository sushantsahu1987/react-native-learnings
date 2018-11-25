const path = require('path');
const uuidv4 = require('uuid/v4');
const {
    Account,
    dbcontroller
} = require('../db');

const {
    fetch_success, fetch_error, register_duplicate,
    register_error, register_success
} = require('./constants');

const accountcontroller = {};

accountcontroller.login = async (req, resp) => {
    console.log("login request");
    console.log(req.body.email);
    const payload = {}
    try {
        const result = await dbcontroller.find(
            Account, {
                "email": req.body.email
            },
            fetch_success,
            fetch_error);

        // Verify password
        console.log(`result login : ${result}`);
        payload.data = result.data;
        payload.success = result.success;
        const user = {
            "email": req.body.email
        };
        payload.token = token.generateToken(user);

    } catch (ex) {
        console.log(ex);
        payload.result = "fail";
        payload.error = ex.error;
    }

    console.log(payload)
    resp.send(payload);
}

accountcontroller.register = async (req, resp) => {
    console.log(req.body);

    const {
        seed1,
        seed2,
        hash
    } = pwdutils.hash(req.body.email, req.body.password)

    const payload = {}
    try {

        const searchresult = await dbcontroller.find(
            Account, {
                "email": req.body.email
            },
            register_duplicate,
            fetch_error);

        console.log('register');
        console.log(searchresult);
        if (searchresult && searchresult.data && searchresult.data.length > 0) {
            payload.result = "ok";
            payload.error = register_duplicate;
        } else {
            const acc = new Account({
                uuid: uuidv4(),
                email: req.body.email,
                password: hash,
                salt1: seed1,
                salt2: seed2
            });
            const result = await dbcontroller.save(acc, register_success, register_error);
            console.log(result);
            payload.result = "ok";
            payload.success = result.success;
            const user = {
                "email": req.body.email
            };
            payload.token = token.generateToken(user);
        }

    } catch (error) {
        console.log(error);
        payload.result = "fail";
        payload.error = error.error;
    }

    console.log(payload)
    resp.send(payload);

}

accountcontroller.logout = (req, resp) => {
    console.log("account:logout");
    resp.send("logout");
}

accountcontroller.auth = (req, resp, next) => {
    console.log(`authenticate route ${req.body}`);
    const tkn = req.body.token;
    try {
        const decodedtkn = token.verifyToken(tkn);
        console.log(`authentication success ${decodedtkn}`);
        next();
    } catch (err) {
        console.log('authentication failed');
        resp.send({
            msg: "fail"
        });
    }
}


module.exports = accountcontroller;