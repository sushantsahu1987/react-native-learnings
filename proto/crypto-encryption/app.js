const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const privatekey = fs.readFileSync(path.join(__dirname, './private.pem'), 'utf8');
const publickey = fs.readFileSync(path.join(__dirname, './public.pem'), 'utf8');

// console.log(privatekey);
// console.log(publickey);

const pass_phrase = "hognose thruster blissful agger carmine minium scythe soapsuds cynosure gestate roundlet wood";
const encrypt_text = {
    name: "sushant",
    password: "test@123"
}

const encryptStringWithRsaPublicKey = function(toEncrypt, relativeOrAbsolutePathToPublicKey) {
    const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
    const publicKey = fs.readFileSync(absolutePath, "utf8");
    const buffer = new Buffer(toEncrypt);
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

const decryptStringWithRsaPrivateKey = function(toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
    const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
    const privateKey = fs.readFileSync(absolutePath, "utf8");
    const buffer = new Buffer(toDecrypt, "base64");
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

const encryptedContent = encryptStringWithRsaPublicKey(encrypt_text.toString(), './public.pem');
console.log(encryptedContent);

const decryptedContent = decryptStringWithRsaPrivateKey(encryptedContent, './private.pem');
console.log(decryptedContent);


// const key_privatekey = {
//     key: privatekey,
//     passphrase: pass_phrase,
//     padding: crypto.constants.RSA_PKCS1_PADDING
// }
// const buffer = new Buffer(encrypt_text.toString());
// const encryptedContent = crypto.privateEncrypt(key_privatekey.toString(), buffer);
// console.log(Buffer.from(encrypt_text).toString('base64'));

// const key_publickey = {
//     key: publickey,
//     passphrase: pass_phrase,
//     padding: crypto.constants.RSA_PKCS1_PADDING
// }
// const decryptedContent = crypto.publicDecrypt(key_publickey.toString(), encryptedContent);
// console.log(decryptedContent);