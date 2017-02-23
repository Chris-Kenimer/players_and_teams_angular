"use strict";
angular.module('playersApp')
  .factory('playerFactory', function($http){
    var factory = {};
    var users = [
      {firstName: 'Beldar', lastName: 'DeCicco', favLanguage: 'Python' }
    ];

    factory.getPlayers = function (callback) {

     console.log('Factory talking...showing all players...');
     $http.get('/players')
         .then(function(allPlayers) {
             console.log('All palyers returned...', allPlayers.data);
             callback(allPlayers.data);
         })
         .catch(function(err) {
             console.log('Error showing all players...', err.data);
         })


    }
    factory.addPlayer = function(newPlayer, callback, errors){
      console.log(newPlayer);
      $http.post('/player', {name: newPlayer})
        .then(function (response) {
          console.log("Response Message",response);

          if(response.status === 200){
            // console.log(response.data.player);
            callback(response.data);
          }
          else if (response.status === 500) {
            errors(response.data);
          }

        })
        .catch(function(errorResponse){
          console.log('error', errorResponse);
          errors(errorResponse.data);
        });
    }
    // Update User:
    // factory.update = function(id, user, updateCallback, errorsCallback) {
    //     $http.put('/users/' + id, user)
    //         .then(function(updatedUser) {
    //             console.log(updatedUser.data);
    //             updateCallback();
    //         })
    //         .catch(function(err) {
    //             console.log('ERROR UPDATING!!');
    //             console.log(err.data);
    //             errorsCallback(err.data);
    //         })
    // };

    // Delete User:
    factory.deletePlayer = function(player, deleteCallback) {
        $http.delete('/player/' + player)
            .then(function(message) {
                console.log("Delete Factory Message", message);
                deleteCallback(message);
            })
            .catch(function(err) {
                console.log('Error deleting player!', err.data);
            })
    }


    return factory;


  })
  .factory('teamFactory', function($http){
    var factory = {};

    var teams = [
      {firstName: 'Beldar', lastName: 'DeCicco', favLanguage: 'Python' }
    ];

    factory.getTeams = function (callback) {

     console.log('Factory talking...showing all teams...');
     $http.get('/teams')
         .then(function(allTeams) {
             console.log('All teams returned...', allTeams.data);
             callback(allTeams.data);
         })
         .catch(function(err) {
             console.log('Error showing all teams...', err.data);
         })


    }
    factory.addTeam = function(newTeam, callback, errors){
      console.log(newTeam);
      $http.post('/team', {name: newTeam})
        .then(function (response) {
          console.log("Response Message",response);

          if(response.status === 200){

            callback(response.data);
          }
          else if (response.status === 500) {
            errors(response.data);
          }

        })
        .catch(function(errorResponse){
          console.log('error', errorResponse);
          errors(errorResponse.data);
        });
    }
    // Update User:
    // factory.update = function(id, user, updateCallback, errorsCallback) {
    //     $http.put('/users/' + id, user)
    //         .then(function(updatedUser) {
    //             console.log(updatedUser.data);
    //             updateCallback();
    //         })
    //         .catch(function(err) {
    //             console.log('ERROR UPDATING!!');
    //             console.log(err.data);
    //             errorsCallback(err.data);
    //         })
    // };

    // Delete User:
    factory.deleteTeam = function(team, deleteCallback) {
        $http.delete('/team/' + team)
            .then(function(message) {
                console.log("Delete Factory Message", message);
                deleteCallback(message);
            })
            .catch(function(err) {
                console.log('Error deleting player!', err.data);
            })
    }


    return factory;
  }).
  factory('associationFactory', function($http){
    var factory = {};


    factory.getAssociations = function(callback){
      $http.get('/associations')
          .then(function(allAssociations) {
              console.log('All associations returned...', allAssociations.data);
              callback(allAssociations.data);
          })
          .catch(function(err) {
              console.log('Error showing all players...', err.data);
          })

    }
    factory.addAssociation = function(newAssociation, callback, errors){
      console.log(newAssociation);
      $http.post('/association', newAssociation)
        .then(function (response) {
          console.log("Response Message",response);

          if(response.status === 200){

            callback(response.data);
          }
          else if (response.status === 500) {
            errors(response.data);
          }

        })
        .catch(function(errorResponse){
          console.log('error', errorResponse);
          errors(errorResponse.data);
        });
    }
    
    return factory;
  });
