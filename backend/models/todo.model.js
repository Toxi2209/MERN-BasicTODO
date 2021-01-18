const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Todo = mongoose.model('Todo', toDoSchema);

module.exports = Todo;