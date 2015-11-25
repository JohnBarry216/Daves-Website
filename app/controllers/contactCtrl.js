app.controller('contactCtrl', function($scope, mailFactory){

	//on form submit
	$scope.sendEmail = function() {

		$('#mailModal').modal('show');

		mailFactory.sendMail($scope.fields).then(function(data) {
			console.log(data);
		}, function(data) {
			console.log('s');
			console.log(data);
		});

	}
}); 