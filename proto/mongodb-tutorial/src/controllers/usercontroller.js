const token = require('../token');
const utils = require('../utils');
const usercontroller = {};

usercontroller.login = (req, resp) => {

    console.log('login: ');
    const {email,password} = req.body;
    const user = {
        email,
        password
    };

    const tkn = token.generateToken(user)
    resp.send({
        msg: "ok",
        token: tkn,
    });
}

usercontroller.auth = (req, resp, next) => {
    console.log('authenticate route');
    const decodedtkn = token.verifyToken(tkn);
    next();
}


usercontroller.register = (req, resp) => {

    const {email,password} = req.body;
    const user = {
        email,
        password
    };
    const hash = utils.hash(user.password);
    console.log(`hash ${hash}`);

    const verify = utils.verifyHash(user.password, hash);
    console.log(`verify ${verify}`);
    console.log(user);

    const tkn = token.generateToken(user)
    resp.send({
        msg: "ok",
        token: tkn
    });
}

usercontroller.logout = (req, resp) => {
    resp.send({
        item: 'logout'
    });
}

module.exports = usercontroller;