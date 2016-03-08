document.addEventListener("deviceready", init, false);
function init() {

	navigator.contacts.find(
		[navigator.contacts.fieldType.displayName],
		gotContacts,
		errorHandler);
    
    function onSuccess(contact) {
        alert("Save Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices

    // populate some fields
    var name = new ContactName();
    name.givenName = "PhoneGap";
    name.familyName = "Test";
    contact.name = name;
    contact.note = "Note test";
    
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work','51922849', false)
    phoneNumbers[1] = new ContactField('mobile','51922840', true)
    
    contact.phoneNumbers = phoneNumbers;
    
    // save to device
    contact.save(onSuccess,onError);
    
}

function errorHandler(e) {
	console.log("errorHandler: "+e);
}

function gotContacts(c) {
	picDiv = document.querySelector("#pictures");
	picDiv.innerHTML = "gotContacts, number of results "+c.length+"<br/><br/>";
    
    for(var i=0, len=c.length; i<len; i++) {
        picDiv.innerHTML += ""+c[i].name.givenName+" "+c[i].name.familyName+"<br/>";
        picDiv.innerHTML += "<br/><br/>";
	} 
    
} 