document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("patientForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se recargue la página

        // Obtener valores del formulario
        const name = document.getElementById("name").value.trim();
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.getElementById("gender").value;

        // Validar campos
        if (!name || !birthdate || !gender) {
            alert("Por favor completa todos los campos.");
            return;
        }

        // Mostrar mensaje de éxito
        alert(`✅ ¡Registro exitoso!\n\nNombre: ${name}\nNacimiento: ${birthdate}\nGénero: ${gender}`);

        // Limpiar formulario
        form.reset();
    });
});