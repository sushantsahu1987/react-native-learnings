const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const readfile = (name) => {
    return new Promise((resolve, reject) => {
        const abspath = path.join(__dirname, name);
        const options = {
            encoding: "utf8"
        };
        fs.readFile(abspath, options, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    })
};

//  You cannot return data from a async function
const app = async () => {

    let privatekey;
    let data = {
        name: "sushant"
    }
    data = JSON.stringify(data);
    try {
        privatekey =  await readfile("./private.pem");
    } catch (err) {
        console.log(err);
    }   
    console.log(privatekey);
    const key = crypto.pbkdf2Sync(privatekey,"salt", 100000, 256, "sha512");
    console.log(key.toString("hex").length);

    const buffer = Buffer.from(data);
    const enccontent = crypto.privateEncrypt(key, buffer);
    console.log(enccontent.toString("hex"));

}


app();
// const content = awa