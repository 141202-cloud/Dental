document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Lógica para el botón "Ver todos los servicios"
    const btnServicios = document.getElementById("btn-servicios");
    
    if (btnServicios) {
        btnServicios.addEventListener("click", function() {
            // Desplazamiento suave hacia la sección de contacto (o donde decidas poner los servicios)
            const seccionContacto = document.getElementById("contacto");
            if (seccionContacto) {
                seccionContacto.scrollIntoView({ behavior: "smooth" });
            }
            
            // Opcional: Mostrar un mensaje rápido
            setTimeout(() => {
                alert("¡Próximamente estaremos detallando nuestros tratamientos de Ortodoncia y Endodoncia! Mientras tanto, puedes agendar tu cita por WhatsApp.");
            }, 800); 
        });
    }

    // 2. Scroll suave para los enlaces del menú superior (Inicio, Contacto, Servicios)
    document.querySelectorAll('a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const destinoId = this.getAttribute('href');
            const destino = document.querySelector(destinoId);
            
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Efecto visual al hacer scroll en el Header (Opcional, para más profesionalismo)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        }
    });
});