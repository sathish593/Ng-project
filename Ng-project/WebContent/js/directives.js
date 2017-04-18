var dire=angular.module('CustomDirectives',[]);
dire.directive('myDirective1', function() {
	return{
		restrict: 'EACM',
		template: '<a href="http://google.com"> Click me to go to Google</a>'
	}
});

	dire.directive('myDirective', function() {
		return{
			restrict: 'A',
			replace: true,
			scope: {
				myUrl: '@myUrl1', // binding strategy -- same attribute name in dom 
				myLinkText: '@' // if the html attribute name is different we need to use @attributename
				},
			template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
		}
	});
	
	dire.directive('myDirective2', function() { //taking data inside of directive
		return {
			restrict: 'A',
			replace: true,
			scope: {
			myUrl: '=someAttr', // MODIFIED =binding strategy
			myLinkText: '@'
			},
			template: '\<div>\ <label>My Url Field:</label>\
			<input type="text"\
			ng-model="myUrl" />\
			<a href="{{myUrl}}">{{myLinkText}}</a>\
			</div>\
			'
			}
			})