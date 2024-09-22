function funcioncap(form){

 var sueldo =document.getElementById('sueldo').value

 if(!/^\d+(\.\d{1,3})?$/.test(sueldo)){
    alert("Por favor ingrese un sueldo válido con haste tres decimales")
    return false
 }

 sueldo = parseFloat(sueldo)

 if(sueldo < 0 || sueldo > 10000){
    alert("Por favor ingrese un sueldo mayor que cero y menor que 10,000" )
    return false
 }else{
    
    let extra = sueldo * .1
    extra = extra * 3
    sueldo = (sueldo + extra).toFixed(3)
    document.getElementById('total').value = sueldo

    return false
 }


}

function btn(){

    document.forms["capital"].reset();

}