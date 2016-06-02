angular.module('hackathonApp')

.factory('Link', ['$resource', function($resource) {
  return $resource('/api/link/:id',{}, {
  })
}])
