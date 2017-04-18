angular.module('myApp.services', [])
.factory('githubService', function($http) {
	var githubUrl = 'https://api.github.com';

	var runUserRequest = function(username, path) {
		// Return the promise from the $http service
		// 	hat calls the Github API using JSONP
		return $http({
			method: 'JSONP',
			url: githubUrl + '/users/' +username + '/' + path + '?callback=JSON_CALLBACK'
		});
	}
		// Return the service object with a single function
		// events
	return {
		events: function(username) {
				return runUserRequest(username, 'events');
		}
	};
});