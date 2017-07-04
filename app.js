	  // Esto es llamado con los resultados de FB.getLoginStatus().
	  function statusChangeCallback(response) {
	  	console.log('statusChangeCallback');
	  	console.log(response);
		// El objeto de respuesta se retorna con un campo de estado que permite a la
		// app conocer el estado actual de inicio de sesión de la persona.
		if (response.status === 'connected') {
	      // Sesión iniciada en tu aplicación y en Facebook.
	      testAPI();
	  } else if (response.status === 'not_authorized') {
	      // La persona esta loggeada en Facebook, pero no en la app.
	      document.getElementById('status').innerHTML = 'Please log ' +
	      'into this app.';
	  } else {
	      // La persona no ha iniciado sesión en Facebook, por lo que no estamos seguros de si
		  // están conectados a esta aplicación o no.
		  document.getElementById('status').innerHTML = 'Please log ' +
		  'into Facebook.';
		}
	}


	function checkLoginState() {
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	}




	window.fbAsyncInit = function() {
		FB.init({
			appId      : '685469858315867',
			cookie     : true,
			xfbml      : true,
			version    : 'v2.9'
		});
		FB.AppEvents.logPageView();   
	};


	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
};


(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function testAPI() {
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function(response) {
		console.log('Successful login for: ' + response.name);
		document.getElementById('status').innerHTML =
		'Thanks for logging in, ' + response.name + '!';
	});
}