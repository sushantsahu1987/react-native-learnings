const express = require('express');
const app = express();
const routes = require('./src/routes');

routes(app);
app.listen(3000, ()=> {
    console.log('server is running on server 3000');
});