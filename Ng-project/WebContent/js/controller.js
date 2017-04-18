var appcontroller= angular.module("practice");
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

// demonstrate another way of adding controller
	appcontroller.controller('CalcController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) { $scope.counter += amount; };
	$scope.subtract = function(amount) { $scope.counter -= amount; };
	});

	appcontroller.controller('ParentController', function($scope) {
	$scope.person = {greeted: false};
	});
	
	
	appcontroller.controller('ChildController', function($scope) {
	$scope.sayHello = function() {
	$scope.person.name = "Ari Lerner";
	$scope.person.greeted = true;
	}
	});

	appcontroller.controller("MyCtrl", function($scope) {
		$scope.people = [
			{name: "Ari", city: "San Francisco"},
			{name: "Erik", city: "Seattle"}
			];
	 $scope.name = "Peter";
	 $scope.user = {
	 name: "Parker"
	 };
	 });
	
	appcontroller.controller("EquationController", function($scope) {
		$scope.equation = {};
		$scope.change = function() {
		$scope.equation.output = Number($scope.equation.x) * 2;
		};
		});

	appcontroller.controller('FormController', function($scope) {
		$scope.fields = [
			{placeholder: 'Username', isRequired: true},
			{placeholder: 'Password', isRequired: true},
			{placeholder: 'Email (optional)', isRequired: false}
			];
			$scope.submitForm = function() {
			alert("it works!");
			};
			});
	appcontroller.controller('CounterController', function($scope) {
		$scope.decrement = function() {
			$scope.count = $scope.count - 1;
			};
			});
	appcontroller.controller('CityController', function($scope) {
		$scope.cities = [
			{name: 'Seattle'},
			{name: 'San Francisco'},
			{name: 'Chicago'},
			{name: 'New York'},
			{name: 'Boston'}
			];
			});
	appcontroller.controller('LotteryController', function($scope) {
		$scope.generateNumber = function() {
		return Math.floor((Math.random()*10)+1);
		}
		})
	appcontroller.controller("MyNestedCtrl", function($scope) {
	 });
	
	
	appcontroller.controller('ServiceController',function($scope, $timeout,githubService) {
		var timeout;
		$scope.$watch('username', function(newUsername) {
			if (newUserName) {
				if (timeout) $timeout.cancel(timeout);
				timeout = $timeout(function() {
					githubService.events(newUsername)
					.success(function(data, status, headers) {
						$scope.events = data.data;
						
					});
					
				},350);
			}
			
			
		});
		
	});

	controllers.ParseController= function($scope, $parse,$interpolate) {
		$scope.$watch('expr', function(newVal, oldVal, scope) {
			if (newVal !== oldVal) {
				// Let's set up our parseFun with the expression
				var parseFun = $parse(newVal);
				// Get the value of the parsed expression
				$scope.parsedValue = parseFun(scope);
			}
		});
		$scope.$watch('emailBody', function(body) {
			if (body) {
			var template = $interpolate(body);
			$scope.previewText =template({to: $scope.to});
			}
			});
		$scope.today = new Date();
	};
	
	
		
appcontroller.controller(controllers);