const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model for submitted entry
let SubmittedSchema = new Schema({
  name: {type: String, required: true, max: 50},
  word: {type: String, required: true, max: 50}
});

module.exports = mongoose.model('Submitted', SubmittedSchema);
