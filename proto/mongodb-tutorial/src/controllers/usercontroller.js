const usercontroller = {};
const token = require('../token');

usercontroller.login = (req, resp) => {
    const user = {
        email: "test@gmail.com",
        password: "abcd"
    };
    const tkn = token.generateToken(user)
    resp.send({
        item: 'login',
        token: tkn,
    });
}

usercontroller.auth = (req, resp, next) => {
    console.log('authenticate route');
    const decodedtkn = token.verifyToken(tkn);
    next();
}


usercontroller.register = (req, resp) => {
    resp.send({
        item: 'register'
    });
}

usercontroller.logout = (req, resp) => {
    resp.send({
        item: 'logout'
    });
}

module.exports = usercontroller;