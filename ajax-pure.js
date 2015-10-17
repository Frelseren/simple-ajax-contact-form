function myFunction() {

	var error	= false,
		name	= document.getElementById('name').value,
		email	= document.getElementById('email').value,
		message = document.getElementById('message').value;

	console.log(name + " " + email + " " + message);
	console.log(error);

	if (message.length === 0) {
		error = true;
		document.getElementById('fail-message').innerHTML = '<p>Please enter your enquiry.</p>';
		document.getElementById('fail-message').style.display = 'block';
		console.log('Message is missing')
	} else {
		document.getElementById('fail-message').style.display = 'none';
	}

	if (email.length === 0 || email.indexOf('@') === -1) {
		error = true;
		document.getElementById('fail-email').innerHTML = '<p>Please enter a valid email address.</p>';
		document.getElementById('fail-email').style.display = 'block';
		console.log('Email is missing')
	} else {
		document.getElementById('fail-email').style.display = 'none';
	}

	if (name.length === 0) {
		error = true;
		document.getElementById('fail-name').innerHTML = '<p>Please enter your name.</p>';
		document.getElementById('fail-name').style.display = 'block';
		console.log('Name is missing')
	} else {
		document.getElementById('fail-name').style.display = 'none';
	}

	

	

	console.log(name + "/n" + email + "/n" + message);
	console.log(error);

	if (error === false) {
		var elements = document.getElementsByClassName("ajax-post");
	    var formData = new FormData();

	    for(var i=0; i<elements.length; i++)
	    {
	        formData.append(elements[i].name, elements[i].value);
	    }
	    var xmlHttp = new XMLHttpRequest();
	        xmlHttp.onreadystatechange = function()
	        {
	            if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            {
	                alert(xmlHttp.responseText);
	            }
	        }
	        xmlHttp.open("post", "contact-form.php"); 
	        xmlHttp.send(formData); 

	    document.getElementById('form').style.display = 'none';
	    document.getElementById('success').style.display = 'block';
	}


}