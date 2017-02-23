var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PlayerSchema = new mongoose.Schema({
  name:  { type: String, required: [true, 'Please provide a minimum of 3 characters'], minlength: [3, 'Please provide some length to your name'] },
  _team: {type: Schema.Types.ObjectId, ref: 'Team'},
  created_at: { type: Date, default: Date.now }
});

mongoose.model('Player', PlayerSchema);
var Player = mongoose.model('Player');
