function submit() {

	var megrendel_nev=document.getElementById("megrendel_nev").value;
	document.getElementById("nev").innerHTML=megrendel_nev;

    var megrendel_cim=document.getElementById("megrendel_cim").value;
	document.getElementById("cim").innerHTML=megrendel_cim;

    var megrendel_tel=document.getElementById("megrendel_tel").value;
	document.getElementById("tel").innerHTML=megrendel_tel;

}

/*---------------------------------------------------------------------------------------*/

function nev_szinez_on() {

	document.getElementById("megrendel_nev").style.backgroundColor = "yellow";

}
function cim_szinez_on() {

	document.getElementById("megrendel_cim").style.backgroundColor = "yellow";
    
}
function tel_szinez_on() {

	document.getElementById("megrendel_tel").style.backgroundColor = "yellow";
    
}

/*---------------------------------------------------------------------------------------*/

function nev_szinez_off() {

	document.getElementById("megrendel_nev").style.backgroundColor = "white";

}
function cim_szinez_off() {

	document.getElementById("megrendel_cim").style.backgroundColor = "white";

}
function tel_szinez_off() {

	document.getElementById("megrendel_tel").style.backgroundColor = "white";

}