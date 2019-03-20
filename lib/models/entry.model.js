const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model for entry
let EntrySchema = new Schema({
  name: String,
  word: String,
  points: Number
});

module.exports = mongoose.model('Entry', EntrySchema);
