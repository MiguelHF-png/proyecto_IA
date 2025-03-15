document.addEventListener("DOMContentLoaded", function () {
    // Efecto en la navbar al hacer scroll
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-sm", "bg-dark");
        } else {
            navbar.classList.remove("shadow-sm", "bg-dark");
        }
    });

    // Validación del formulario de contacto
    document.querySelector("#contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        
        if (nombre.trim() === "" || email.trim() === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }
        
        alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.");
        this.reset();
    });

    // Efecto de hover en la galería
    let imagenes = document.querySelectorAll("#galeria img");
    imagenes.forEach(img => {
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease-in-out";
        });
        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Modo oscuro/claro
    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Modo Oscuro";
    toggleBtn.classList.add("btn", "btn-neon", "modo-toggle");
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("modo-claro");
        if (document.body.classList.contains("modo-claro")) {
            toggleBtn.innerText = "Modo Oscuro";
        } else {
            toggleBtn.innerText = "Modo Claro";
        }
    });

    // Scroll suave para los enlaces de navegación
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Cambio de color al pasar sobre los testimonios
    let testimonios = document.querySelectorAll("#testimonios blockquote");
    testimonios.forEach(testimonio => {
        testimonio.addEventListener("mouseenter", function () {
            this.style.color = "#facc15";
        });
        testimonio.addEventListener("mouseleave", function () {
            this.style.color = "white";
        });
    });
});
