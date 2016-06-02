angular.module('appServices', ['ngResource'])

.factory('Link', ['$resource', function($resource) {
  return $resource('/api/link/:id',{}, {
  })
}])
