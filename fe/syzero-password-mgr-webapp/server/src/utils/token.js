const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const token = {};

const readcertificate = (path) => {
    return fs.readFileSync(__dirname + path);
}

token.init = () => {

    const filepath = process.env.DEV === 'DEBUG' ?
        '../../certificates/dev.certificate.key' :
        '../../certificates/private.certificate.key';
    token.private = readcertificate(filepath);
}

token.generateToken = (user) => {
    const tkn = jwt.sign({
        data: user
    }, token.private, {
        expiresIn: '15m'
    });
    return tkn;
}

token.verifyToken = (tkn) => {
    const decoded = jwt.verify(tkn, token.private);
    console.log(decoded);
    return decoded;
}


module.exports = token;