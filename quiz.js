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
    this.banderas = [];
    this.preguntaActual = 0;
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


  finalizarJuego() {
  }
}





