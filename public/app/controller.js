angular.module('hackathonApp')

.controller('UrlShowCtrl', ['$scope', '$stateParams', 'Urls', function($scope, $stateParams, Urls) {
  $scope.urls = {};

  Urls.get({id: $stateParams.id}, function success(data) {
    $scope.film = data;
  }, function error(data) {
    console.log(data);
  });
}])

.controller('UrlsCtrl', ['$scope', '$stateParams', 'Link', function($scope, $stateParams, Link) {
  $scope.links = [];


  Link.get({}, function success(data) {
    $scope.links = data;
  }, function error(data) {
    console.log(data);
  });
}])

