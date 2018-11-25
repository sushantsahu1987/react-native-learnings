const accountscontroller = require('./accounts');
const credentialcontroller = require('./credentials');

module.exports = (app) => {

	app.post('/api/v1/credentials', credentialcontroller.get);
	app.post('/api/v1/credentials/add', credentialcontroller.save);

	app.post('/api/v1/accounts/login', accountscontroller.login);
	app.post('/api/v1/accounts/register', accountscontroller.register);
	app.post('/api/v1/accounts/logout', accountscontroller.logout);

};