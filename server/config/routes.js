
// var messages = require('../controllers/messages.js');
var PlayersController = require('./../controllers/players');
var TeamsController = require('./../controllers/teams');
var AssociationController = require('./../controllers/associations');

// module.exports = function(app) {
//
//   app.get('/', function(req, res) {
//     res.json("index")
//
//   });
//   app.get('/players', function(req, res){
//     players.list(req, res);
//     // res.json({index: "hey"})
//   });
//   app.get('/player_new', function(req,res){
//     players.create(req, res);
//   });
//   app.post('/addPlayer', function(req, res){
//
//
//      players.create(req, res);
//   });
//
//
//
// }
module.exports = function(app) {
    console.log('Server side routes loaded...');
    app.post('/player', PlayersController.create)
        .get('/players', PlayersController.showAll)
        // .get('/player/:id', PlayersController.findOne)
        // .put('/player/:id', PlayersController.update)
        .delete('/player/:id', PlayersController.delete)
        // team routes
        .post('/team', TeamsController.create)
        .get('/teams', TeamsController.showAll)
        // .get('/team/:id', TeamsController.findOne)
        // .put('/team/:id', TeamsController.update)
        .delete('/team/:id', TeamsController.delete)
        // associations routes
        .post('/association', AssociationController.addTeam)
        .get('/associations', AssociationController.showAll)
        // .get('/team/:id', TeamsController.findOne)
        // .put('/team/:id', TeamsController.update)
        .delete('/association/:id', AssociationController.delete)
};
