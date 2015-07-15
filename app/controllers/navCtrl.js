app.controller('navCtrl', function($scope, $location){

	$scope.isActive = function(urlPath) {
		return $location.path() == urlPath;
	};
});