const path = require('path');
const uuidv4 = require('uuid/v4');

const {
    dbcontroller,
    Credentials,
    Vault
} = require('../db');
const {
    save_success,
    save_error,
    fetch_error,
    fetch_success
} = require('./constants');


const credentialcontroller = {};

credentialcontroller.get = async (req, resp) => {
    console.log("credential:get:request");
    console.log(req.body);

    const payload = {};
    try {
        const result = await dbcontroller.find(
            Task, {
                uuid: req.body.uuid
            },
            fetch_success.msg,
            fetch_error.msg);

        payload.data = result.data;
        payload.success = result.success;
    } catch (error) {
        payload.result = "fail";
        payload.error = error.error;
    }
    console.log(payload)
    resp.send(payload);


}
credentialcontroller.save = async (req, resp) => {
    console.log("credential:save:request");

    console.log('task add:item');
    console.log(req.body);

    const task = new Task({
        uuid: req.body.uuid,
        id: uuidv4(),
        task: req.body.task
    });

    const payload = {};
    try {
        const result = await dbcontroller.save(
            task,
            save_success.msg,
            save_error.msg);

        payload.result = req.body.task;
        payload.success = result.success;
    } catch (error) {
        payload.result = "fail";
        payload.error = error.error;
    }
    console.log(payload)
    resp.send(payload);

}

module.exports = credentialcontroller;