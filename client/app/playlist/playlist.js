angular.module('Q.playlist', [
'Q.services',
'angularSoundManager',
'ngRoute'
])

.controller('playlistController', function($scope, $location, Playlist) {
  $scope.songs= [];

        SC.initialize({
            client_id: "f270bdc572dc8380259d38d8015bdbe7"
        });

        SC.get("/groups/55517/tracks", {
            limit: 5
        }, function(tracks) {
            for (var i = 0; i < tracks.length; i ++) {
                SC.stream( '/tracks/' + tracks[i].id, function( sm_object ){
                    var track = {
                        id: tracks[i].id,
                        title: tracks[i].title,
                        artist: tracks[i].genre,
                        url: sm_object.url
                    };

                    $scope.$apply(function () {
                        $scope.songs.push(track);
                    });
                });
            }
        });
  // Playlist.getSongs().then(function(songs){

  // })
})