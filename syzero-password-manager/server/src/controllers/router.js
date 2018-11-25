const accountscontroller = require('./accounts');
const credentialcontroller = require('./credentials');

module.exports = (app) => {

	app.post('/api/v1/credentials', accountcontroller.auth, credentialcontroller.get);
	app.post('/api/v1/credentials/add', accountcontroller.auth, credentialcontroller.save);

	app.post('/api/v1/accounts/login', accountscontroller.login);
	app.post('/api/v1/accounts/register', accountscontroller.register);
	app.post('/api/v1/accounts/logout', accountcontroller.auth, accountscontroller.logout);

};