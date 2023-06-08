// Clase Jugador
class Jugador {
  constructor() {
    this.vidas = 2; // Vidas del jugador
  }

  // Método para restar una vida al jugador
  restarVida() {
    this.vidas--;
  }
}

// Clase Juego
class Juego {
  constructor() {
    this.preguntas = []; // Arreglo para almacenar las preguntas
    this.preguntaActual = 0; // Índice de la pregunta actual
    this.tiempoPregunta = 8000; // Tiempo para responder cada pregunta
    this.intervalId = null; // ID del intervalo de tiempo para la pregunta actual
    this.jugador = new Jugador(); // Instancia de la clase Jugador
  }

  // Método para iniciar el juego
  iniciarJuego(tipoJuego) {
    this.cargarPreguntas(tipoJuego);
    this.mostrarPregunta();
    this.startTimer();
  }

  // Método para cargar las preguntas según el tipo de juego seleccionado
  cargarPreguntas(tipoJuego) {
    if (tipoJuego === 'banderas') {
      // Filtrar el arreglo de preguntas original para obtener solo las preguntas de banderas
      this.preguntas = this.preguntas.filter(pregunta => pregunta.tipo === 'bandera');
    } else if (tipoJuego === 'preguntas') {
      // Filtrar el arreglo de preguntas original para obtener solo las preguntas de preguntas generales
      this.preguntas = this.preguntas.filter(pregunta => pregunta.tipo === 'pregunta');
    }
  }

  // Método para mostrar la pregunta actual
  mostrarPregunta() {
    const pregunta = this.preguntas[this.preguntaActual];
    const flagImage = document.getElementById('flag-image');
    const optionsList = document.getElementById('options-list');
    const result = document.getElementById('result');
    const nextButton = document.getElementById('next-button');

    // Reiniciar el resultado y el botón de siguiente
    result.textContent = '';
    nextButton.style.display = 'none';

    // Mostrar la imagen de la bandera o preguntas generales de la pregunta actual
    if (pregunta.tipo === 'bandera') {
      flagImage.src = pregunta.imagen;
      flagImage.style.display = 'block';
    } else {
      flagImage.style.display = 'none';
      // Mostrar la pregunta de texto en su lugar
      // Código para mostrar la pregunta de texto en el DOM
    }

    // Limpiar la lista de opciones
    optionsList.innerHTML = '';

    // Crear elementos de lista para las opciones
    pregunta.opciones.forEach(opcion => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = opcion;
      button.addEventListener('click', () => this.verificarRespuesta(opcion));
      li.appendChild(button);
      optionsList.appendChild(li);
    });
  }

  // Método para verificar la respuesta seleccionada por el jugador
 

    // Comprobar si la respuesta es correcta
    

    // Mostrar el botón de siguiente si no hay más preguntas o vidas
    

    

  // Método para pasar a la siguiente pregunta o finalizar el juego
  

    // Comprobar si hay más preguntas o vidas disponibles
   

  // Método para iniciar el temporizador de cada pregunta


// Agregar preguntas al juego
juego.preguntas = [
  {
    tipo: 'bandera',
    imagen: 'ruta-a-la-imagen-1',
    opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
    respuesta: 'Opción 1'
  },
  {
    tipo: 'pregunta',
    pregunta: '¿Cuál es la capital de Francia?',
    opciones: ['París', 'Londres', 'Roma'],
    respuesta: 'París'
  },
  // Agregar más preguntas...
];

// Iniciar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  // Lógica para permitir al jugador seleccionar el tipo de juego
  const banderasButton = document.getElementById('banderas-button');
  const preguntasButton = document.getElementById('preguntas-button');

  banderasButton.addEventListener('click', () => {
    juego.iniciarJuego('banderas');
  });

  preguntasButton.addEventListener('click', () => {
    juego.iniciarJuego('preguntas');
  });
});

// Asignar el evento click al botón de siguiente
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
  juego.siguientePregunta();
});
}