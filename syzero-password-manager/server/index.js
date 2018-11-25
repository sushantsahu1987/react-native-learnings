const app = require('./src/app');
const {
    token
} = require('./src/utils');
const {
    db
} = require('./src/db')


const connect = async () => {

    token.init();
    try {
        const result = await db.init();
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        });
    } catch(err) {
        console.log('unable to connect to mongodb')
    }

}

connect();