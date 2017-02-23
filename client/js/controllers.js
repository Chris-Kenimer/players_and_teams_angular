angular.module('playersApp')
  .controller('playerController', ['$scope', 'playerFactory', '$http',  function($scope, playerFactory, $http){
    $scope.players = [];
    $scope.playerName = '';
    var cb = {
      show: function(allPlayers) {
            console.log("controller response",allPlayers);
            $scope.players = allPlayers;
      },
      add: function(player) {
          $scope.players.push(player);
          $scope.errors = '';
          $scope.playerName = '';
      },
      remove: function() {
        $scope.getPlayers();
      },
      errors: function(errors) {
        console.log("hit errors", errors);
        $scope.errors = errors;
      }
  }
    $scope.getPlayers = function(){
      playerFactory.getPlayers(cb.show);
    };

    $scope.addPlayer = function(){
      playerFactory.addPlayer($scope.playerName, cb.add, cb.errors);
    };

    $scope.removePlayer = function(id) {
      playerFactory.deletePlayer(id, cb.remove);
    }
  }])
  .controller('teamsController', ['$scope', 'teamFactory', function($scope, teamFactory){
    $scope.teams = [];
    $scope.teamName = '';

    var cb = {
      show: function(allTeams) {
        $scope.teams = allTeams;
      },
      add: function(team) {
        $scope.teams.push(team);
        $scope.errors = '';
        $scope.teamName = '';
      },
      remove: function() {
        $scope.getTeams();
      },
      errors: function(errors) {
        $scope.errors = errors;
      }
    }

    $scope.getTeams = function() {
      teamFactory.getTeams(cb.show);
    }
    $scope.addTeam = function(){
      teamFactory.addTeam($scope.teamName, cb.add, cb.errors);
    };

    $scope.removeTeam = function(id) {
      teamFactory.deleteTeam(id, cb.remove);
    }

  }])
  .controller('associationsController', ['$scope', 'playerFactory', 'teamFactory', 'associationFactory', function($scope, playerFactory, teamFactory, associationFactory){
    $scope.associations = [];

    var cb = {
      showAll: function(allAssociations) {
        $scope.error = '';
        console.log(allAssociations);
        $scope.associations = allAssociations;

      },
      getPlayers: function(allPlayers) {
        $scope.players = allPlayers;
      },
      getTeams: function(allTeams) {
        $scope.teams = allTeams;
      },
      add: function(associations) {
        $scope.showAll();
      },
      errors: function(errors) {
          $scope.errors = errors;
        }

    }
    $scope.showAll = function() {
      playerFactory.getPlayers(cb.getPlayers);
      teamFactory.getTeams(cb.getTeams);
      associationFactory.getAssociations(cb.showAll);
    }
    $scope.addAssociation = function() {
      var data = {
        player: $scope.player,
        team: $scope.team
      }
      console.log(data);
      associationFactory.addAssociation(data, cb.add, cb.errors);
    }
  }]);
