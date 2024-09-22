document.getElementById('htmlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    eliminarEtiquetas();
});

function eliminarEtiquetas() {
    const html = document.getElementById('inputHtml').value.trim();
    
    if (!html) {
        alert('Por favor, ingrese código HTML para eliminar etiquetas peligrosas.');
        return;
    }

    const resultado = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');

    if (resultado === html) {
        document.getElementById('resultadoEtiquetas').value = 'No se encontraron etiquetas <script> en el código.';
    } else {
        document.getElementById('resultadoEtiquetas').value = resultado;
    }
}
