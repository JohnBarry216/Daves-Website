/**
* websiteApp Module
*
* Description
*/
var app = angular.module('websiteApp', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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

}]);