angular
.module('app')
.component('app', {
	templateUrl: 'app/hello.html',
	controller: TechController
});

function TechController ($scope) {
	$scope.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma',
	'SitePoint'
	];

	
}
