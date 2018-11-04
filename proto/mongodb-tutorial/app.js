const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const xss = require('xss');

const Todo = require('./Todo');

const prod = path.join(__dirname, '/prod.config');
const dev = path.join(__dirname, '/dev.config');
let mongourl = '';

const read = (url) => {
    const data = fs.readFileSync(url, 'utf8');
    return data.trim();
}

const connect = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('mongoose error connection')
    });
    db.once('open', () => {
        app();
    })
}

const app = () => {
    console.log('connected');
    // setTimeout(insert, 5000);
    // setTimeout(insertMany, 10000);
    // setTimeout(find, 20000);
    // setTimeout(remove, 30000);
    // setTimeout(find, 40000);
    // setTimeout(find, 5000);
    // setTimeout(update, 9000);
    // setTimeout(count, 15000);
    // setTimeout(findBy, 15000);
    // setTimeout(insertSave, 5000);
    close();
}

const insertSave = () => {
    console.log('insert save');

    const name = "<scri<script>pt>alert('stuff u') go to chillis</script>";
    console.log(name);
    const cleanedname = xss(name);
    console.log(cleanedname);
    const doc = new Todo({
        name: cleanedname
    });
    doc.save(err => {
        if (err) {
            console.log(`insert error : ${err}`);
        }
        console.log("inserted successfully");
    })
}


const findBy = () => {
    Todo.find({
        name: "let us eat"
    }, (err, docs) => {
        if (err) {
            console.log(`findBy error : ${err}`);
        }
        console.log(`${docs}`);
    })
}

const close = () => {
    setTimeout(() => {
        mongoose.connection.close()
    }, 45000);
}

const count = () => {
    Todo.count({}, (err, count) => {
        if (err) {
            console.log(`count error : ${err}`);
        }
        console.log(`no. of documents : ${count}`);
    })
}

const update = () => {
    Todo.findByIdAndUpdate("5bdec380b3da640fa0b0b627", {
        $set: {
            name: "take the dog out for a walk !"
        }
    }, (err, doc) => {
        if (err) {
            console.log(`update error : ${err}`);
        }
        console.log(doc);
    });

}

const remove = () => {
    const id = "5bdec380b3da640fa0b0b626";
    Todo.findByIdAndRemove(id, (err, doc) => {
        if (err) {
            console.log(`delete error : ${err}`);
        }
        console.log(doc);
    })

    console.log('remove');
}

const find = () => {
    console.log('find');
    Todo.find({}, (err, docs) => {
        if (err) {
            console.log(`find error : ${err}`);
        }
        console.log(docs);
    });
}


const insert = () => {
    console.log('insert');
    const doc = new Todo({
        name: "let us eat"
    });
    doc.save(err => {
        if (err) {
            console.log(`insert error : ${err}`);
        }
        console.log("inserted successfully");
    })

}

const insertMany = () => {
    console.log('insert many');
    const docs = [{
        name: "may be grab a drink"
    }, {
        name: "walk the dog"
    }, {
        name: "get some sleep"
    }];
    Todo.insertMany(docs, err => {
        if (err) {
            console.log(`insert many error : ${err}`);
        }
        console.log("inserted many successfully");
    });
}

if (fs.existsSync(prod)) {
    mongourl = read(prod)
} else {
    mongourl = read(dev)
}

console.log(mongourl);
connect(mongourl);