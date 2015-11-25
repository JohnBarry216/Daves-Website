app.factory('mailFactory', function($q){

	
	/* private functions */
	validateEmailAddress = function(email) {

		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	return re.test(email);
	};


	validateInfo = function(mailingInfo) {

		//confirm we have recieved an object
		if(typeof mailingInfo !== 'object'){
			return "Invalid Type";
		}


		/* validate required propertie */
		
		//confirm and validate email
		if(!mailingInfo.email || !validateEmailAddress( mailingInfo.email )){	
			return "Invalid Email";
		}

		//confirm subject
		if(!mailingInfo.subject){
			return "Invalid Subject";
		}

		//case confirm message Body
		if(!mailingInfo.messageBody){
		 	return "Invalid Message Body";
		}
		

		//everything is good if it reaches this point
		return true;
	};


	/* public functions */
	var factory = {};
	factory.sendMail = function(mailingInfo) {

		var defer = $q.defer();
		var returnObject = { sent: "", errorMessage: ""	};

		//validate
		var valid = validateInfo(mailingInfo);
		if( typeof valid === 'string'){


			returnObject.sent = "false";
			returnObject.errorMessage = valid;
			defer.reject(returnObject);
		} else {

			console.log('check');

		}
		
		return defer.promise;
	};


	// make functions public
	return {
		sendMail: factory.sendMail
	};
});
