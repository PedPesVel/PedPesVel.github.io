function funcioncali(form){
    var uno = document.getElementById('calipar1').value
    var dos = document.getElementById('calipar2').value
    var tres = document.getElementById('calipar3').value
    var exam = document.getElementById('caliexam').value
    var trabajo = document.getElementById('calitrabajo').value

    if(!/^\d+(\.\d{1,2})?$/.test(uno) || !/^\d+(\.\d{1,2})?$/.test(dos) || !/^\d+(\.\d{1,2})?$/.test(tres) 
    || !/^\d+(\.\d{1,2})?$/.test(exam) || !/^\d+(\.\d{1,2})?$/.test(trabajo)){
        alert("Ingresa calificaciones correctas, hasta dos decimales")
        return false
    }else{
        
    }

    uno = parseFloat(uno)
    dos = parseFloat(dos)
    tres = parseFloat(tres)
    exam = parseFloat(exam)
    trabajo = parseFloat(trabajo)

    if(uno > 10 || dos > 10 || tres > 10 || exam > 10 || trabajo > 10){
        alert("Ingrese calificaciones válidas, no mayores a 10")
        return false
    }else{
       
        let final = uno + dos + tres + exam + trabajo
        final = final * 0.2
        document.getElementById('califinal').value = final.toFixed(2)
        return false
    }



}

function Parcial1(){
    document.getElementById('calipar1').value = ''
}
function Parcial2(){
    document.getElementById('calipar2').value = ''
}
function Parcial3(){
    document.getElementById('calipar3').value = ''
}
function Limpiar(){
    document.forms['calif'].reset();
}