/**
* websiteApp Module
*
* Description
*/
var app = angular.module('websiteApp', ['ui.router']);

app.run(function($templateCache, $http){
	
	//pre cache about page
	$http.get('app/views/about.html', {cache:$templateCache});
	$http.get('app/views/home.html', {cache:$templateCache});

});

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'homeCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html',
			controller: 'aboutCtrl'
		});

	$locationProvider.html5Mode(true);
});