document.addEventListener("DOMContentLoaded", function () {
    var listaItems = document.querySelectorAll(".experiencia li");
    var mensajes = {
        "1": " Trabajé en el centro de copiado como encargado.",
        "2": " Fui técnico de fotocopiadoras en la empresa Imagen.",
        "3": " Trabajé en el área de logística en la empresa Maxiconsumo.",
        "4": " Trabajé en la Mutual 13 de Diciembre como administrativo.",
        "5": " Trabajé en el Estudio Jurídico Hugo/Jerez como administrativo.",
        "6": " Trabajé en la empresa Sideco en el área de Logistica.",
        "7": " Trabajé en el Estudio Jurídico Anllo y Gigena como administrativo."
    }
    listaItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            var mensaje = document.createElement("span");
            mensaje.classList.add("mensaje-emergente");
            mensaje.innerHTML = mensajes[item.id];
            item.appendChild(mensaje);
        });
        item.addEventListener("mouseout", function () {
            var mensaje = item.querySelector(".mensaje-emergente");
            item.removeChild(mensaje);

        });
    });
    var titulo = document.querySelector("h1");

    titulo.addEventListener("click", function () {
        alert("Currículum de Gigena Mariano");
    });
});