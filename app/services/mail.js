app.factory('MailFactory', function(mailingInfo){
	
	this.validateEmailAddress = function(email) {

		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	return re.test(email);
	};


	this.validateInfo = function(mailingInfo) {

		//confirm we have recieved an object
		if(typeof mailingInfo !== 'object'){
			return "Invalid Type";
		}

		//validate required propertie
		switch (mailingInfo) {
			//confirm and validate email
			case !mailingInfo.email || !validateEmailAddress( mailingInfo.email ):
				return "Invalid Email";

			//confirm subject
			case !mailingInfo.subject:
				return "Invalid Subject";

			//case confirm message Body
			 case !mailingInfo.messageBody:
			 	return "Invalid Message Body";
		}

		//everything is good if it reaches this point
		return true;
	};


	this.sendMail = function(mailingInfo) {

		var defer = $q.defer();
		var returnObject = { sent: "", errorMessage: ""	};

		//validate
		var valid = validateInfo(mailingInfo);
		if( typeof valid === 'string'){

			returnObject.sent = "false";
			returnOject.errorMessage = valid;
			defer.reject();
		} else {

			

		}
		
		return defer.promise;
	};


	// make functions public
	return {
		send: sendMail,
		test: function(message) {
			alert(message);
		}
	};
});
