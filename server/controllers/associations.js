// controller

var mongoose = require('mongoose');
var Player = mongoose.model('Player');
var Team = mongoose.model('Team');


module.exports = {
  showAll: function(req, res) {
    Player.find({})
    .populate('_team')
    .exec(function(err,association){
      return res.json(association);
    });

  },
  addTeam: function(req, res){
    console.log(req.body.id);
    Player.findOne({_id: req.body.player})
        .then(function(foundPlayer) {
            foundPlayer._team = req.body.team;
            foundPlayer.save()
                .then(function(savedPlayer) {
                    console.log('Player successfully saved and updated!', savedPlayer);
                    Team.findOne({_id:req.body.team})
                    .then(function(foundTeam){
                      foundTeam.players.push(savedPlayer);
                      foundTeam.save(function(err){
                        console.log(err);
                      })
                    })
                    return res.json(savedPlayer);
                })
                .catch(function(err) {
                    console.log('Error updating and saving player!', err);
                    if (err.errors == null) {
                        console.log('Custom Validator Function Error detected...formatting now and sending to front end:');
                        return res.status(500).json(err.message);
                    } else {
                        console.log('Built in Mongoose Validation detected....');
                        return res.status(500).json(err.errors.playername.message)
                    };
                });
        })
        .catch(function(err) {
            console.log('There has been an error!');
            return res.status(500).json(err);
        })

  },
  create: function(req, res) {


  },
  delete: function(req, res) {

  }
}
