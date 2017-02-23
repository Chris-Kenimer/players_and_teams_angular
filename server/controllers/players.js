// controller

var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
  showAll: function(req, res) {
    Player.find({})
      .then(function(allPlayers){
        return res.json(allPlayers);
      })
      .catch(function(err){

      });
  },
  create: function(req, res) {


    console.log('Server-side Player controller talking...', req.body);
    Player.create(req.body)
        .then(function(newPlayer) {
            return res.json(newPlayer);
        })
        .catch(function(err) {
            console.log('Error trying to create Player!', err.errors.name.message);
            if (err.errors == null) {
                console.log('Custom Validator Function Error detected...formatting now and sending to front end:');
                return res.status(500).json(err.errors.name.message);
            } else {
                console.log('Built in Mongoose Validation detected....');
                return res.status(500).json(err.errors.name.message)
            };
        })

  },
  delete: function(req, res) {
        Player.remove({_id: req.params.id})
            .then(function() {
                return res.json('Delete Success!');
            })
            .catch(function(err) {
                console.log(err);
                return res.status(500).json(err);
            })
    },
}
