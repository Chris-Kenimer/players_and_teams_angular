// controller

var mongoose = require('mongoose');
var Team = mongoose.model('Team');

module.exports = {
  showAll: function(req, res) {
    Team.find({})
      .then(function(allTeams){
        return res.json(allTeams);
      })
      .catch(function(err){

      });
  },
  create: function(req, res) {


    console.log('Server-side Team controller talking...', req.body);
    Team.create(req.body)
        .then(function(newTeam) {
            return res.json(newTeam);
        })
        .catch(function(err) {
            console.log('Error trying to create Team!', err.errors.name.message);
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
        Team.remove({_id: req.params.id})
            .then(function() {
                return res.json('Delete Success!');
            })
            .catch(function(err) {
                console.log(err);
                return res.status(500).json(err);
            })
    },
}
