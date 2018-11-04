const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const TodoSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    }

});

TodoSchema.plugin(timestamp);
const Todo = mongoose.model('Todo',TodoSchema);
module.exports = Todo;