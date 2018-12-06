const utils = (process.env.DEV === 'DEBUG') ?
    require('./dev.pwdutils') :
    require('./prod.pwdutils');
const token = require('./token');

module.exports = {
    utils,
    token
}