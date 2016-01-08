angular.module('Q.services', [
'ionic'
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
    SC.initialize({
      client_id: 'f270bdc572dc8380259d38d8015bdbe7'
    });


    return SC.get('/tracks', {
      q: query,
    }).then(function(tracks) {
      return tracks;
    });
    // SC.get("/groups/55517/tracks", {
    //         limit: 5
    //     }, function(tracks) {
    //         for (var i = 0; i < tracks.length; i ++) {
    //             SC.stream( '/tracks/' + tracks[i].id, function( sm_object ){
    //                 var track = {
    //                     id: tracks[i].id,
    //                     title: tracks[i].title,
    //                     artist: tracks[i].genre,
    //                     url: sm_object.url
    //                 };


    //                     tracks.push(track);

    //             });
    //         }
    //     });
    // return tracks;
}
  return {
    getSongs: getSongs,
    addSong: addSong,
    searchSongs: searchSongs
  }

})