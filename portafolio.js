document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio cargado correctamente");

    // Agregar una animación suave al hacer clic en los enlaces del menú
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Cambiar dinámicamente el tema entre claro y oscuro
    const toggleThemeButton = document.getElementById("toggle-theme");
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });

    // Mostrar una alerta de bienvenida personalizada
    setTimeout(() => {
        alert("Bienvenido a mi portafolio. Explora mis proyectos y contáctame si te interesa colaborar.");
    }, 2000);

    // Agregar efecto de resaltado a las secciones al hacer scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
                document.querySelector(`.nav-link[href='#${section.id}']`).classList.add("active");
            }
        });
    });
});
