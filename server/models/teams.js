var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var TeamSchema = new mongoose.Schema({
  name:  { type: String, required: [true, 'Please provide a minimum of 3 characters'], minlength: [3, 'Please provide some length to your name'] },
  players: [{type: Schema.Types.ObjectId, ref: 'Player'}],
  created_at: { type: Date, default: Date.now }
});

mongoose.model('Team', TeamSchema);
var Player = mongoose.model('Team');
