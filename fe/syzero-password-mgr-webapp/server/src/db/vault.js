const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const VaultSchema = mongoose.Schema({
    account_id: {
        type: String,
        required: true,
        trim: true
    },
    vault_id: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
});

VaultSchema.plugin(timestamp);

const Vault = mongoose.model('Vault', VaultSchema);
module.exports = Vault;