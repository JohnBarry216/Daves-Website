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
	$http.get('app/views/home-services.html', {cache:$templateCache});
	$http.get('app/views/company-services.html', {cache:$templateCache});
	$http.get('app/views/past-projects.html', {cache:$templateCache});
	$http.get('app/views/current-projects.html', {cache:$templateCache});
	$http.get('app/views/contact.html', {cache:$templateCache});

});

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		// index
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'homeCtrl'
		})


		// services
		.state('home-services', {
			url: '/home-services',
			templateUrl: 'app/views/home-services.html',
			controller: 'servicesCtrl'
		})
		.state('company-services', {
			url: '/company-services',
			templateUrl: 'app/views/company-services.html',
			controller: 'servicesCtrl'
		})


		// Projects
		.state('current-projects', {
			url: '/current-projects',
			templateUrl: 'app/views/current-projects.html',
			controller: 'projectsCtrl'
		})
		.state('past-projects', {
			url: '/past-projects',
			templateUrl: 'app/views/past-projects.html',
			controller: 'projectsCtrl'
		})



		// about
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html',
			controller: 'aboutCtrl'
		})


		// contact 
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/views/contact.html',
			controller: 'contactCtrl'
		});

	$locationProvider.html5Mode(true);
});