$ (document).ready(function(){
    alert("soy jquery");
});


function validar() {
	
	
	
    var user = $("#user").val();
    var pass = $("#pass").val();
    if (user == "luis" && pass == "123") {
        alert("BIENVENIDO:" + user);
    }else{
    	alert("ERORR..." );
    }
}