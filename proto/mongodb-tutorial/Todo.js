const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

});

TodoSchema.pre('save', function (next) {
    console.log(`pre save name : ${this.name}`);
    this.name = this.name.toUpperCase();
    next();
});

TodoSchema.plugin(timestamp);

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;