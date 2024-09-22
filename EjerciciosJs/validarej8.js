document.getElementById('utilidadesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const salario = parseFloat(document.getElementById('salario').value);
    const antiguedad = parseFloat(document.getElementById('antiguedad').value);
    let porcentajeUtilidad;

    if (isNaN(salario) || salario <= 0 || isNaN(antiguedad) || antiguedad < 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05;
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentajeUtilidad = 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentajeUtilidad = 0.10;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }

    const utilidad = salario * porcentajeUtilidad;
    document.getElementById('utilidadfinal').value = `La utilidad anual es: $${utilidad.toFixed(2)}`;
});

function Limpiar() {
    document.forms['utilidadesForm'].reset();
    document.getElementById('utilidadfinal').value = '';
}
