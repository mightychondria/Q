angular.module('Q.services', [
'ngRoute'
])

.factory('Playlist', function($http){
  var getSongs = function(){
      return $http ({
        method: 'GET',
        url: '/'
      }).then(function(response){
        return response.data;
      })
    }

  var addSong = function (song){
    return $http ({
      method: 'POST',
      url: '/',
      data: song
    })

  }

  var searchSongs = function(query){

  }

  return {
    getSongs: getSongs,
    addSong: addSong
  }

})