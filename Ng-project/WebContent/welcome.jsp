<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html ng-app="practice">
<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
<title>Practice Main Page </title>

<link href="css/bootstrap.css" rel="stylesheet" />
<link href="css/bootstrap-theme.css" rel="stylesheet" />
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="js/angular.js"></script>
<script src="js/angular-route.js"></script>
<script src="js/services.js"></script>

<script type="text/javascript">
var practice=angular.module('practice',['ngRoute','customFilters','CustomDirectives','myApp.services'])
.run(function($rootScope,$timeout) {
	$rootScope.isDisabled = true;
	$timeout(function() {
		$rootScope.isDisabled = false;
		$rootScope.myHref = 'http://google.com';
		$rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
		},5000);
    $rootScope.owner = "XYZ";
	});
practice.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/welcome",
			{
	 		templateUrl:"welcome.html",
			})
			.when("/bl",
			{
			
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
/* 
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
practice.controller('CalcController', function($scope) {
	$scope.counter = 0;
	$scope.add = function(amount) { $scope.counter += amount; };
	$scope.subtract = function(amount) { $scope.counter -= amount; };
	});

practice.controller('ParentController', function($scope) {
	$scope.person = {greeted: false};
	
	});
practice.controller('ChildController', function($scope) {
	$scope.sayHello = function() {
	$scope.person.name = "Ari Lerner";
	$scope.person.greeted = true;
	}
	});

practice.controller("MyCtrl", function($scope) {
	 $scope.name = "Peter";
	 $scope.user = {
	 name: "Parker"
	 };
	 });

practice.controller("MyNestedCtrl", function($scope) {
	 });

practice.controller(controllers); */


</script>
<script src="js/controller.js"></script>
<script src="js/filters.js"></script>
<script src="js/directives.js"></script>
<style type="text/css">
.odd {
background-color: blue;
}
.even {
background-color: red;
}
input.ng-invalid {
border: 1px solid red;
}
input.ng-valid {
border: 1px solid green;
}
/* div {
    border: 1px solid black;
}

div + div {
    border-left: 1px solid transparent;
} */
.red {
background-color: red;
}
</style>
</head>
<body >
<div class="container">

<div class="panel panel-success">
<div class="panel-heading">
<div class="row">

<div class="pull-right"></div>
<div class="row"><div class="center-block" style="width:400px;"><h1 >NG Practice Application</h1></div></div>
</div>
</div>

<div class="panel ">
<ul class="nav nav-pills ">
<li class=""><a href="#/welcome">BASICS</a></li>
<li><a href="#/bl">Directives</a></li>
<li><a href="#/jld">Services</a></li>
<li><a href="#/dwr">3</a></li>
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">
Extras <span class="caret"></span>
</a>
<ul class="dropdown-menu ">
<li><a href="#">ABC</a></li>
<li><a href="#">BBC</a></li>
<li><a href="#">IBC</a></li>
<li class="divider"></li>
<li><a href="#">Separated link</a></li>
</ul>
</li>
</ul>


</div>

<div class="row-fluid">

   <div class="content " style="min-height: 200px; ">
	<div ng-view></div>
    </div>
   
</div>
</div>


</div>














</body>

</html>
