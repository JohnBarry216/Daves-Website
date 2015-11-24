app.controller('contactCtrl', function($scope, MailFactory){

	//on form submit
	$scope.sendEmail = function() {
		console.log($scope.fields);
		MailFactory.test('me');
	}
});