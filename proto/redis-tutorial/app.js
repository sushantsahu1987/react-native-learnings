const redis = require('redis');

const url = process.env.REDIS_URL
const p = process.env.REDIS_PORT;
const pwd =  process.env.REDIS_PWD;

const options = {
    host: url,
    port: p,
    password: pwd,
}

const client = redis.createClient(options);

client.on('error', err => {
    console.log(err);
});

setTimeout(()=> {
    client.set("test", "myvalue", redis.print); 
}, 5000);

setTimeout(()=> {
    client.get("test", function(err, val) {
        // reply is null when the key is missing
        if(err) {
            console.log(val);
            return
        }
        console.log(val);
    });
}, 8000)

// client.set("test", "myvalue", redis.print);

setTimeout(()=> {
    client.quit();
}, 10000);

