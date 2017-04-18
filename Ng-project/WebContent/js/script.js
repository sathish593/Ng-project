var practice=angular.module('practice',['ngRoute']);

practice.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/welcome",
			{
	 		templateUrl:"welcome.html",
			})
			.when("/bl",
			{
			controller: 'showlogs',
		 	templateUrl:"1.html",
			})
			.when("/jld",
			{
				 templateUrl:"2.html",
				
			})
			.when("/dwr",
					{
				 templateUrl:"3.html",
				
			})
			.otherwise(
					{
						redirectTo:"/welcome"});
}]);

var controllers={};
 controllers.MyController=function ($scope) {
	 $scope.clock ={now: new Date()};// instead of using variables it is advised to use objects.
	var updateClock = function() {
	$scope.clock.now= new Date();
	};
	setInterval(function() {
	$scope.$apply(updateClock);
	}, 10);
	updateClock();
	};

practice.controller(controllers);