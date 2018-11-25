const path = require('path');
const uuidv4 = require('uuid/v4');

const credentialcontroller = {};

credentialcontroller.get = async (req, resp) => {
    console.log("credential:get:request");
    resp.send(payload);

}
credentialcontroller.save = async (req, resp) => {
    console.log("credential:save:request");
    resp.send(payload);
}

module.exports = credentialcontroller;
