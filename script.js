function validar () {
	// body...
	var valor=document.getElementById("numero").value;
	
	
	if (valor.length > 2) {
		setInterval(aviso);
		return false;		
		

	} else {
		return true;
	}
}

function aviso(){
	var texto = document.getElementById("aviso");
	texto.setAttribute("style","class","validar");

}