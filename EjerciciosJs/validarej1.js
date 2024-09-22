function funcion(form){

    let capital = document.getElementById('capital').value



    if (!/^\d+(\.\d{1,3})?$/.test(capital)) {
        alert("Por favor ingrese un número válido con hasta tres decimales.");
        return false;
    }

    capital = parseFloat(capital)

    if( capital < 0){

        alert("Ingrese un monto de dinero mayor que cero")
        return false
    }else{
        let porcentajecap = capital * .02
        let capital_final = (capital + porcentajecap).toFixed(3) 
        document.getElementById('capital_final').value = capital_final
        return false
    }

}

function btn(){

    document.forms["capital"].reset();

}