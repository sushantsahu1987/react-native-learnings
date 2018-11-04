const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const privatekey = fs.readFileSync(path.join(__dirname, './private.pem'), 'utf8');
const publickey = fs.readFileSync(path.join(__dirname, './public.pem'), 'utf8');

// console.log(privatekey);
// console.log(publickey);

const pass_phrase = "hognose thruster blissful agger carmine minium scythe soapsuds cynosure gestate roundlet wood";
let encrypt_text = {
    name: "sushant",
    password: "test@123"
}

encrypt_text = JSON.stringify(encrypt_text);

let key_privatekey = {
    key: privatekey,
    passphrase: pass_phrase,
    padding: crypto.constants.RSA_PKCS1_PADDING
}
key_privatekey = JSON.stringify(key_privatekey);
const buffer = Buffer.from(encrypt_text);
// let encryptedContent = crypto.privateEncrypt(privatekey.toString(), buffer);
let encryptedContent = crypto.privateEncrypt(privatekey.toString(), buffer);
console.log(encryptedContent.toString("base64"));

let key_publickey = {
    key: publickey,
    passphrase: pass_phrase,
    padding: crypto.constants.RSA_PKCS1_PADDING
}
key_publickey = JSON.stringify(key_publickey);
// let decryptedContent = crypto.publicDecrypt(publickey.toString(), encryptedContent);
let decryptedContent = crypto.publicDecrypt(publickey.toString(), encryptedContent);
decryptedContent = decryptedContent.toString("utf8");
console.log(decryptedContent);