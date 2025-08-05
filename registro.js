document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("patientForm");
    const cardGrid = document.getElementById("card-grid");
    const clearAllBtn = document.getElementById("clearAll");

    mostrarRegistros();

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const paciente = {
            nombre: document.getElementById("name").value.trim(),
            tipoDocumento: document.getElementById("documentType").value,
            numeroDocumento: document.getElementById("documentNumber").value.trim(),
            fechaNacimiento: document.getElementById("birthdate").value,
            genero: document.getElementById("gender").value,
            habitacion: document.getElementById("room").value.trim(),
            servicio: document.getElementById("service").value.trim()
        };

        if (Object.values(paciente).includes("")) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));

        form.reset();
        mostrarRegistros();
        alert("✅ Paciente registrado con éxito");
    });

    function mostrarRegistros() {
        const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        cardGrid.innerHTML = "";

        pacientes.forEach((p, index) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <button class="delete-button" data-index="${index}">X</button>
                <h4>${p.nombre}</h4>
                <p><strong>Tipo Doc:</strong> ${p.tipoDocumento}</p>
                <p><strong>N° Documento:</strong> ${p.numeroDocumento}</p>
                <p><strong>Nacimiento:</strong> ${p.fechaNacimiento}</p>
                <p><strong>Género:</strong> ${p.genero}</p>
                <p><strong>Habitación:</strong> ${p.habitacion}</p>
                <p><strong>Servicio:</strong> ${p.servicio}</p>
            `;

            cardGrid.appendChild(card);
        });

        // Activar los botones de eliminar
        document.querySelectorAll(".delete-button").forEach(btn => {
            btn.addEventListener("click", function () {
                const index = this.dataset.index;
                eliminarPaciente(index);
            });
        });
    }

    function eliminarPaciente(index) {
        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        pacientes.splice(index, 1);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
        mostrarRegistros();
    }

    clearAllBtn.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres borrar todos los registros?")) {
            localStorage.removeItem("pacientes");
            mostrarRegistros();
        }
    });
});