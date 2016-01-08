angular.module('Q', [
'Q.playlist',
'Q.services',
'angularSoundManager',
'ngRoute'
])

.config(function($routeProvider, $httpProvider){
  console.log('hi')
  $routeProvider
  .when('/playlist', {
    templateUrl: 'app/playlist/playlist.html',
    controller: 'playlistController'
  })
})