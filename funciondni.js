function funcion(form){

    var dni = document.getElementById('dni').value
    var letra = document.getElementById('letra').value
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  



    if(isNaN(dni) || dni < 0 || dni > 99999999 || dni.length != 8){
        alert("Ingrese un dni válido de ocho dígitos")
        return false
        
    }else{
        let num = dni%23 

        if(letra.length != 1 || validar(letra)){
            alert("Por favor ingrese una letra válida, una sola")
            return false

        }else{
            if(letra != letras[num]){
                alert("Tu letra DNI no es la correcta") 
                return false	

            }else{
                alert("Letra DNI correcta")
                return true

            }
        }
        
    }
    
       

}

function validar(letra){

    const valido = /\d/;
    return valido.test(letra);

}