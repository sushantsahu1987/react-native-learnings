const usercontroller = {};

usercontroller.login = (req, resp) => {
    resp.send({item:'login'});
}

usercontroller.register = (req, resp) => {
    resp.send({item:'register'});
}

usercontroller.logout = (req, resp) => {
    resp.send({item:'logout'});
}

module.exports = usercontroller;