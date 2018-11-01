const usercontroller = require('./controllers/usercontroller');
const todocontroller = require('./controllers/todocontroller');

module.exports = (app) => {
	
	app.get('/todo/:id',todocontroller.getItems);
	app.post('/todo/add/:id',todocontroller.addItem);
	app.post('/todo/delete/:id',todocontroller.deleteItem);

	app.post('/user/login', usercontroller.login);
	app.post('/user/register', usercontroller.register);
	app.post('/user/logout', usercontroller.logout);
	

};
