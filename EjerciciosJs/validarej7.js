function validarSalario(form){

    var sueldo = document.getElementById('sueldo').value
    var horas = document.getElementById('extras').value

    if(!/^\d+(\.\d{1,2})?$/.test(sueldo) || !/^\d+(\.\d{1})?$/.test(horas)){
        alert("Por favor ingrese un sueldo y/u horas válidas")
        return false
     }

     let sueldoxhora = parseFloat(sueldo)
     horas = parseInt(horas)
     let sueldovalido = sueldoxhora * 40

    if(sueldovalido > 5000 || sueldovalido == 0){
        alert("Ingresa un sueldo válido, tu sueldo base no puede exceder los 5000 pesos a la semana")
        return false
    }
    if(horas > 40 || horas == 0){
        alert("Ingrese horas válidas (horas completas). Usted no puede trabajar más de 40 horas extra a la semana")
        return false
    }

    let horasdoble = sueldoxhora * 2 * 8
    let horastriple = horas - 8
    horastriple = sueldoxhora * 3 * horastriple

    let pago = horasdoble + horastriple + sueldovalido

    document.getElementById('total').value = pago
    return false

}

function Limpiar(){
    document.forms['salario'].reset()
}