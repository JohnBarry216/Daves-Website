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


		//validate required properties


		return valid;
	}

	this.sendMail = function(mailingInfo) {
		
		validateInfo(mailingInfo);
		
	};


	return {
		send: sendMail
	};
});
