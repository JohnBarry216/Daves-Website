/**
* websiteApp Module
*
* Description
*/
var app = angular.module('websiteApp', ['ui.router']);

app.run(function($templateCache, $http){
	
	//pre cache phone page
	$http.get('app/views/phone.html', {cache:$templateCache});
});

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html'
		})
		.state('phone', {
			url: '/phone',
			templateUrl: 'app/views/phone.html'
		});

	$locationProvider.html5Mode(true);
}]);