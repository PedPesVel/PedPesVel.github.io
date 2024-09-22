function validarfecha(){

    const fecha = document.getElementById('fecha').value

    if(!fecha){
        alert("Por favor, ingrese una fecha válida")
        return
    }

    const seleccionada = new Date(fecha)
    const actual = new Date()
    const imposible = new Date('1908-05-23')


    if(seleccionada > actual){
        alert("Ingresa una fecha válida, antes de el" + " " + actual.toLocaleDateString())
        return
    }else if(seleccionada < imposible){
        alert("La fecha seleccionada no tiene que ser menor que el 23-05-1908")
        return
    }

    const edad = actual.getFullYear() - seleccionada.getFullYear();
    const mes = actual.getMonth() - seleccionada.getMonth();
    if (mes < 0 || (mes === 0 && actual.getDate() < seleccionada.getDate())) {
        edad--;
    }

    document.getElementById('years').value = edad + " " + "años" 

}