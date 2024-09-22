function palabrasANumeros(){

    var arreglouno = {cero:0, uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9}

    var letras = document.getElementById('letras').value
    var arreglodos  = letras.split(" ")

    var convertido = arreglodos.map(function (palabra){
        return arreglouno.hasOwnProperty(palabra) ? arreglouno[palabra] : -1;
    })


    document.getElementById('convertido').value = convertido.join(", ")


}

function limpiar(){
    document.getElementById('letras').value = "Ej. uno dos tres"
    document.getElementById('convertido').value = ""
}
function campo(){
    document.getElementById('letras').value = ""
}