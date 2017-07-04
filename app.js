function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else {
      var padre = document.getElementById('status');
      padre.innerHTML = "";
      var hijo = document.createElement("p");
      var texto = document.createTextNode("Por favor, " + " ingresa a la app");
      hijo.appendChild(texto);
      padre.appendChild(padre);  
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
      var padre = document.getElementById('status');
      padre.innerHTML = "";
      var hijo = document.createElement("p");
      var texto = document.createTextNode('¡Gracias por loguearte en ' + response.name + '!');
      hijo.appendChild(texto);
      padre.appendChild(padre);  
    });
  }


