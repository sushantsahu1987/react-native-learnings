const path = require('path');
const uuidv4 = require('uuid/v4');

const accountcontroller = {};

accountcontroller.login = async (req, resp) => {
    console.log("account:login");
    resp.send("login");
}

accountcontroller.register = async (req, resp) => {
    console.log("account:register");
    resp.send("register");

}

accountcontroller.logout = (req, resp) => {
    console.log("account:logout");
    resp.send("logout");
}

accountcontroller.auth = (req, resp, next) => {
    console.log("account:auth");
    next();
}


module.exports = accountcontroller;
