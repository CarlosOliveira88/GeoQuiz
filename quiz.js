// Objeto con la información de las banderas
const banderas = {
  mexico: {
    nombre: "México",
    urlImagen: "banderas/mexico.png"
  },
  estadosUnidos: {
    nombre: "Estados Unidos",
    urlImagen: "banderas/estados-unidos.png"
  },
  // Agrega más banderas aquí...
};

// Variables globales
let preguntaActual = 0;

// Función para mostrar la siguiente pregunta
function mostrarSiguientePregunta() {
  if (preguntaActual < preguntas.length) {
    const pregunta = preguntas[preguntaActual];
    const bandera = banderas[pregunta.bandera];

    // Mostrar la imagen de la bandera
    let banderaImg = document.getElementById("bandera-img");
    banderaImg.setAttribute("src", bandera.urlImagen);
    banderaImg.setAttribute("alt", bandera.nombre);

    // Mostrar el nombre de la bandera
    let banderaNombre = document.getElementById("bandera-nombre");
    banderaNombre.textContent = bandera.nombre;

    // Incrementar el contador de preguntas
    preguntaActual++;
  } else {
    // No hay más preguntas
    alert("Fin del juego");
  }
}

// Array de preguntas
const preguntas = [
  {
    pregunta: "¿A qué país pertenece esta bandera?",
    bandera: "mexico"
  },
  {
    pregunta: "¿A qué país pertenece esta bandera?",
    bandera: "estadosUnidos"
  },
  // Agrega más preguntas aquí...
];

// Evento del botón "Siguiente"
let siguienteBtn = document.getElementById("siguiente-btn");
siguienteBtn.addEventListener("click", mostrarSiguientePregunta);

// Mostrar la primera pregunta al cargar la página
mostrarSiguientePregunta();
