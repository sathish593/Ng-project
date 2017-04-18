var fil=angular.module("customFilters", []);
fil.filter('capitalize', function() {
	return function(input) {
		if (input)
			return input[0].toUpperCase()+input[1].toUpperCase() + input.slice(2);
	};
});
