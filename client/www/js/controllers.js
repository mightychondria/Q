angular.module('Q.controllers', [
'Q.services',
'Q',
'ionic',
'angularSoundManager',
])

.controller('playlistController', function($scope, $rootScope, $location, Playlist) {
 $rootScope.songs= [];

  $scope.searchSong = function (){
    $rootScope.songs= [];
    return Playlist.searchSongs($scope.query).then(function(tracks){
      console.log(tracks);
      for(var i = 0;i<tracks.length;i++){
        var track = {
                          id: tracks[i].id,
                          title: tracks[i].title,
                          artist: tracks[i].user.permalink,
                          url: tracks[i].stream_url + "?client_id=f270bdc572dc8380259d38d8015bdbe7"
                      };
        $rootScope.$apply(function(){
          $rootScope.songs.push(track);
        })
      }
    })

  }
})