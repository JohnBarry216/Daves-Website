/**
* websiteApp Module
*
* Description
*/
var app = angular.module('websiteApp', ['ui.router']);

app.run(function($templateCache, $http){
	
	//pre cache pages
	$http.get('app/views/about.html', {cache:$templateCache});
	$http.get('app/views/home.html', {cache:$templateCache});
	$http.get('app/views/services.html', {cache:$templateCache});
	$http.get('app/views/contact.html', {cache:$templateCache});

});

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'homeCtrl'
		})
		.state('services', {
			url: '/services',
			templateUrl: 'app/views/services.html',
			controller: 'servicesCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/views/contact.html',
			controller: 'contactCtrl'
		});

	$locationProvider.html5Mode(true);
});