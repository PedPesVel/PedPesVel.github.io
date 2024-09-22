function funciondes(form){
    var inicial = document.getElementById('inicial').value;

    if(!/^\d+(\.\d{1,2})?$/.test(inicial)){
        alert("Por favor, ingrese un precio válido");
        return false;
    }

    inicial = parseFloat(inicial);

    if(inicial < 50 || inicial > 5000){
        alert("Ingrese una cantidad entre 50 y 5000");
        return false;
    } else {
        let ahorro = inicial * 0.15;
        let descuento = inicial - ahorro;
        document.getElementById('ahorro').value = ahorro.toFixed(2);
        document.getElementById('descuento').value = descuento.toFixed(2);
        return false;
    }
}

function btn(){
    document.forms['descuento'].reset();
}
