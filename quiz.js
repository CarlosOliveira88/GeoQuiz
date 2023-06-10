// import { BANDERAS } from "./arrayPaises";
let newBanderas = [
  {
    pais: "Brasil",
    bandera: "imagenes/brasil.webp",
    capital: "Brasilia",
    continente: "América del Sur"
  },
  {
    pais: "Estados Unidos",
    bandera: "imagenes/estados-unidos.webp",
    capital: "Washington D.C.",
    continente: "América del Norte"
  },
  {
    pais: "Canadá",
    bandera: "imagenes/canada.webp",
    capital: "Ottawa",
    continente: "América del Norte"
  },
  {
    pais: "México",
    bandera: "imagenes/mexico.webp",
    capital: "Ciudad de México",
    continente: "América del Norte"
  },
  {
    pais: "Argentina",
    bandera: "imagenes/argentina.webp",
    capital: "Buenos Aires",
    continente: "América del Sur"
  },
  {
    pais: "Colombia",
    bandera: "imagenes/colombia.webp",
    capital: "Bogotá",
    continente: "América del Sur"
  },
  {
    pais: "Perú",
    bandera: "imagenes/peru.webp",
    capital: "Lima",
    continente: "América del Sur"
  },
  {
    pais: "Venezuela",
    bandera: "imagenes/venezuela.webp",
    capital: "Caracas",
    continente: "América del Sur"
  },
  {
    pais: "Chile",
    bandera: "imagenes/chile.webp",
    capital: "Santiago",
    continente: "América del Sur"
  },
  {
    pais: "Reino Unido",
    bandera: "imagenes/reino-unido.webp",
    capital: "Londres",
    continente: "Europa"
  },
]

// Clase Jugador
class Jugador {
  constructor() {
    this.vida1 = document.getElementById("vida-1");
    this.vida2 = document.getElementById("vida-2");
    this.totalVidas = 2;
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
    this.imageBandera = document.getElementById("imgBandera");
    this.banderas = [];
    this.preguntaActual = 0;
    this.tiempoPregunta = 8000; // Tiempo para responder cada pregunta
    this.intervalId = null; // ID del intervalo de tiempo para la pregunta actual
    this.jugador = new Jugador(); // Instancia de la clase Jugador
  }

  // Método para iniciar el juego
  iniciarJuego() { // joao
    // generar el array de opciones
    let preguntaAleatoria = a()
    function a() {
      const indiceAleatorio = Math.floor(Math.random() * newBanderas.length);
      return newBanderas[indiceAleatorio]
    }

    console.log(preguntaAleatoria)
    this.imageBandera.src = preguntaAleatoria.bandera;
    this.banderas.push(preguntaAleatoria.pais);
    this.banderas.push(a().pais)
    this.banderas.push(a().pais)
    this.banderas.push(a().pais)
    console.log(this.banderas)

    let botonA = document.getElementById('span-a');
    botonA.innerHTML = this.banderas[0];
    let botonB = document.getElementById('span-b');
    botonB.innerHTML = this.banderas[1];
    let botonC = document.getElementById('span-c');
    botonC.innerHTML = this.banderas[2];
    let botonD = document.getElementById('span-d');
    botonD.innerHTML = this.banderas[3];
  }
  verificarRespuesta(respuesta) { //ana


  }
  // Método para iniciar el temporizador de cada pregunta
  startTimer() { // ana 
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


  finalizarJuego() { // joao
  }
}

let a = new Juego
a.iniciarJuego()



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
    const bandera = this.banderass[this.preguntaActual];
    const result = document.getElementById('result');
    const nextButton = document.getElementById('next-button');

    // Comprobar si la respuesta es correcta
    if (respuesta === pregunta.respuesta) {
      result.textContent = '¡Respuesta correcta!';
    } else {
      result.textContent = 'Respuesta incorrecta';
      this.jugador.restarVida(); // Restar una vida al jugador
    }



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
    }, 1000)
  }
  // Método para finalizar el juego
  finalizarJuego() {
  }
}

// Crear una instancia del juego
const juego = new Juego();



function banderas() {
  alert("has seleccionado banderas")
}




