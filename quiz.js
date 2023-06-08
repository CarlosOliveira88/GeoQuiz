// Clase Jugador
class Jugador {
  constructor() {
    this.vidas = 2;
    this.aciertos = 0;
  }
  restarVida() {
    this.vidas--;
  }
  sumarAcierto() {
    this.aciertos++;
  }
}


// Clase Juego
class Juego {
  constructor() {
    this.banderas = []; // Arreglo para almacenar las preguntas
    this.preguntaActual = 0; // Índice de la pregunta actual
    this.tiempoPregunta = 8000; // Tiempo para responder cada pregunta
    this.intervalId = null; // ID del intervalo de tiempo para la pregunta actual
    this.jugador = new Jugador(); // Instancia de la clase Jugador
  }
  // Método para iniciar el juego
  iniciarJuego() {

  }
  verificarRespuesta(respuesta) {


  }
  // Método para iniciar el temporizador de cada pregunta
  startTimer() {
    const progressBar = document.getElementById('progress-bar');
    let timeLeft = this.tiempoPregunta / 1000;
    progressBar.style.width = '100%';
    progressBar.style.transition = `width ${timeLeft}s linear`;

    this.intervalId = setInterval(() => {
      timeLeft--;
      progressBar.style.width = `${(timeLeft / (this.tiempoPregunta / 1000)) * 100}%`;

      if (timeLeft === 0) {
        clearInterval(this.intervalId);
        this.verificarRespuesta(null);
      }
    }, 1000);
  }

  // Método para finalizar el juego
  finalizarJuego() {
  }
}

// Crear una instancia del juego
const juego = new Juego();


// Agregar preguntas al juego
// juego.preguntas = [
//   {
//     tipo: 'bandera',
//     imagen: 'ruta-a-la-imagen-1',
//     opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
//     respuesta: 'Opción 1'
//   },
//   {
//     tipo: 'pregunta',
//     pregunta: '¿Cuál es la capital de Francia?',
//     opciones: ['París', 'Londres', 'Roma'],
//     respuesta: 'París'
//   },
//   // Agregar más preguntas...
// ];
function banderas() {
  alert("has seleccionado banderas")
}

// // Iniciar el juego cuando se carga la página
// document.addEventListener('DOMContentLoaded', () => {
//   // Lógica para permitir al jugador seleccionar el tipo de juego
//   const banderasButton = document.getElementById('banderas-button');
//   const preguntasButton = document.getElementById('preguntas-button');


//   banderasButton.addEventListener('click', () => {
//     juego.iniciarJuego('banderas');
//   });


//   preguntasButton.addEventListener('click', () => {
//     juego.iniciarJuego('preguntas');
//   });
// });



