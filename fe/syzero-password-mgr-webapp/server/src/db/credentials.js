const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const CredentialSchema = mongoose.Schema({
    credential_id: {
        type: String,
        required: true,
        trim: true
    },
    vault_id: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    salt1: {
        type: String,
        required: true,
        trim: true
    },
});

CredentialSchema.plugin(timestamp);

const Credential = mongoose.model('Account', CredentialSchema);
module.exports = Credential;
