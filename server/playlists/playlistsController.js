var url = require('url');
var utils = require('./playlistsUtils');
var Promise = require('bluebird');

module.exports = {

  getPlaylist: function(req, res) {
    var playlist_ID = (url.parse(req.url).pathname).slice(1);
    console.log('retrieving info for playlist_id:' + playlist_ID);
    var R = Promise.promisify(utils.retrievePlaylist);
    R(playlist_ID).then(function(playlist) {
      if (playlist) {
        res.json(playlist);
      } else {
        res.status(500).end();
      }
    })
    .catch(function(error) {
      console.log('controller error: ',error);
    });
  },

  addPlaylist: function(req, res) {
    console.log('adding playlist: ',req.body);
    var R = Promise.promisify(utils.storePlaylist);
    R(req.body).then(function(playlist) {
      if (playlist) {
        res.json(playlist);
      } else {
        res.status(500).end();
      }
    })
    .catch(function(error) {
      console.log('controller error: ',error);
    });
  },

  updatePlaylist: function(req, res) {
    var playlist_ID = (url.parse(req.url).pathname).slice(1);
    var playlistInfo = req.body;

    console.log('updating playlist_id:', playlist_ID, ' with info: ', playlistInfo );
    var R = Promise.promisify(utils.updatePlaylist);
    R(playlist_ID,playlistInfo).then(function(playlist) {
      if (playlist) {
        res.json(playlist);
      } else {
        res.status(500).end();
      }
    })
    .catch(function(error) {
      console.log('controller error: ',error);
    });
  }


};