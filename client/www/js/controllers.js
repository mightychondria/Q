angular.module('Q.controllers', [
'Q.services',
'Q',
'ionic',
'angularSoundManager',
])

.controller('playlistController', function($scope, $rootScope, $location, Playlist) {
 $rootScope.songs= [];
 $rootScope.customPlaylist;

  // $scope.addSong = function(song) {
  //   console.log('adding song');
  //   socket.emit('addSong', song);
  // };

  // socket.on('queueUpdated', function(queue){
  //   console.log('queue Updated', queue);
  //   $rootScope.$apply(function() {
  //     $rootScope.customPlaylist = queue;
  //   });
  // });

  // socket.on('getQueue', function(queue){
  //   console.log('queue Updated', queue);
  //   $rootScope.$apply(function() {
  //     $rootScope.customPlaylist = queue;
  //   });
  // });



$scope.searchSong = function (){
    $rootScope.songs= [];
    if($scope.query === ''){
      return;
    } else{
      return Playlist.searchSongs($scope.query).then(function(tracks){
        console.log(tracks)
        for(var i = 0;i<tracks.length;i++){
          console.log(tracks[i].artwork_url)
          var track = {
                            id: tracks[i].id,
                            title: tracks[i].title,
                            artist: tracks[i].user.permalink,
                            url: tracks[i].stream_url + "?client_id=f270bdc572dc8380259d38d8015bdbe7",
                            waveform: tracks[i].waveform_url
                        };
          if(tracks[i].artwork_url === null){
              track.image = '../img/notavailable.png';
          } else {
              track.image = tracks[i].artwork_url
          }
          $rootScope.$apply(function(){
            $rootScope.songs.push(track);
          })
        }
      })

    }

  }

  $scope.clearResults = function (){
    $scope.query = '';
    $rootScope.songs = [];
  }

  $scope.isHost = function(){
      return Playlist.isHost();
  }

  $scope.clearResults = function (){
    $scope.query = '';
    $rootScope.songs = [];
  }
  console.log(Playlist.isHost());
})
.controller('landingPageController', function($scope, $location, Playlist){
  $scope.makeHost = function(){
    Playlist.makeHost();
  }

  $scope.makeGuest = function(){
    Playlist.makeGuest();
  }
})