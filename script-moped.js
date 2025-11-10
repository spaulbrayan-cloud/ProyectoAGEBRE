// --- SCRIPT PARA EL DESPLEGABLE DE MOPED ---

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Obtener todos los botones que disparan un menú
    const triggers = document.querySelectorAll('.moped-trigger');

    // 2. Función para cerrar TODOS los menús
    function closeAllDropdowns() {
        document.querySelectorAll('.moped-dropdown.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
        document.querySelectorAll('.moped-btn.active').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    // 3. Añadir un "oyente" de clic a CADA botón
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.stopPropagation(); // Evita que el clic se propague al 'window'
            
            // Encuentra el menú desplegable específico de este botón
            const dropdown = this.nextElementSibling;
            
            // Revisa si este menú ya está abierto
            const isAlreadyOpen = dropdown.classList.contains('show');

            // Primero, cierra todos los demás menús
            closeAllDropdowns();

            // Si no estaba abierto, ábrelo
            if (!isAlreadyOpen) {
                dropdown.classList.add('show');
                this.classList.add('active'); // Gira la flecha
            }
        });
    });

    // 4. Opcional: Cerrar los menús si se hace clic fuera de ellos
    window.addEventListener('click', function(event) {
        // Si el clic NO fue en un botón disparador
        if (!event.target.matches('.moped-trigger, .moped-trigger *')) {
            closeAllDropdowns();
        }
    });
});