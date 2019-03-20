const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model for submitted entry
let EntrySchema = new Schema({
  name: {type: String, required: true, max: 50},
  word: {type: String, required: true, max: 50},
  points: Number
});

module.exports = mongoose.model('Entry', EntrySchema);
