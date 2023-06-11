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
    if (this.totalVidas < 0) {
      alert("game over")
    }
  }
  sumarAcierto() {
    this.aciertos++;
  }
}


// Clase Juego
class Juego {
  constructor() {
    this.imageBandera = document.getElementById("imgBandera");
    this.botonA = document.getElementById('span-a');
    this.botonB = document.getElementById('span-b');
    this.botonC = document.getElementById('span-c');
    this.botonD = document.getElementById('span-d');
    this.banderas = [];// guardar las preguntas
    this.preguntaTotal = 10;
    this.preguntaActual = 0;
    this.tiempoPregunta = 8000; // Tiempo para responder cada pregunta
    this.intervalId = null; // ID del intervalo de tiempo para la pregunta actual
    this.jugador = new Jugador(); // Instancia de la clase Jugador

  }

  // Método para iniciar el juego
  iniciarJuego() { // joao

    function objetoAleatorio() {
      const indiceAleatorio = Math.floor(Math.random() * newBanderas.length);
      return newBanderas[indiceAleatorio]
    }

    const opciones = (x) => {
      let preguntaAleatoria = x()
      if (!this.banderas.includes(preguntaAleatoria)) {
        this.banderas.push(preguntaAleatoria);
      } else {
        opciones(objetoAleatorio)
      }
    };

    for (let i = 0; i < 10; i++) {
      opciones(objetoAleatorio);
    }

    let indice = this.preguntaActual;
    let respuesta = this.banderas[indice].pais
    this.imageBandera.src = this.banderas[indice].bandera;


    function arrayOpiciones(x) {
      let array = [];
      array.push(respuesta);
      console.log("array antes del for: " + array);

      for (let i = 1; i < 4; i++) {

        const opciones = () => {
          let preguntaAleatoria = x()
          if (!array.includes(preguntaAleatoria.pais)) {
            array.push(preguntaAleatoria.pais);
          } else {
            opciones(objetoAleatorio)
          }
        };

        opciones()
      }
      console.log("array despues del for: " + array);

      document.getElementById('span-a').innerHTML = array[0];
      document.getElementById('span-b').innerHTML = array[1];
      document.getElementById('span-c').innerHTML = array[2];
      document.getElementById('span-d').innerHTML = array[3];
    }

    arrayOpiciones(objetoAleatorio)

  }

  verificarRespuesta() { //ana


    let indice = this.preguntaActual;
    let respuesta = this.banderas[indice].pais
    console.log("estoy en verificar respuesta y respuesta vale =>  " + respuesta)

    // clic boton a 
    document.getElementById('btn-a').addEventListener('click', () => {
      if (this.botonA.innerHTML == respuesta) {
        console.log("la opcion a es la respuesta correcta")
        this.jugador.aciertos++;
        this.preguntaActual++; //usar como indice
        document.getElementById('btn-a').style.backgroundColor = "green";
        console.log(this.preguntaActual)
        if (this.preguntaActual == 10) {
          this.finalizarJuego();
        } else {
          this.iniciarPregunta();
        }

      } else {
        this.jugador.restarVida();
        document.getElementById('btn-a').style.backgroundColor = "red";
        alert("la opcion correcta es " + respuesta);
      }
    });

    // clic boton b
    document.getElementById('btn-b').addEventListener('click', () => {
      if (this.botonB.innerHTML == respuesta) {
        console.log("la opcion a es la respuesta correcta")
        this.jugador.aciertos++;
        this.preguntaActual++; //usar como indice
        document.getElementById('btn-b').style.backgroundColor = "green";
        console.log(this.preguntaActual)
        if (this.preguntaActual == 10) {
          this.finalizarJuego();
        } else {
          this.iniciarPregunta();
        }

      } else {
        this.jugador.restarVida();
        document.getElementById('btn-b').style.backgroundColor = "red";
        alert("la opcion correcta es " + respuesta);
      }
    });

    // clic boton c
    document.getElementById('btn-c').addEventListener('click', () => {
      if (this.botonC.innerHTML == respuesta) {
        console.log("la opcion a es la respuesta correcta")
        this.jugador.aciertos++;
        this.preguntaActual++; //usar como indice
        document.getElementById('btn-c').style.backgroundColor = "green";
        console.log(this.preguntaActual)
        if (this.preguntaActual == 10) {
          this.finalizarJuego();
        } else {
          this.iniciarPregunta();
        }

      } else {
        this.jugador.restarVida();
        document.getElementById('btn-c').style.backgroundColor = "red";
        alert("la opcion correcta es " + respuesta);
      }
    });

    // clic boton d
    document.getElementById('btn-d').addEventListener('click', () => {
      if (this.botonD.innerHTML == respuesta) {
        console.log("la opcion a es la respuesta correcta")
        this.jugador.aciertos++;
        this.preguntaActual++; //usar como indice
        document.getElementById('btn-d').style.backgroundColor = "green";
        console.log(this.preguntaActual)
        if (this.preguntaActual == 10) {
          this.finalizarJuego();
        } else {
          this.iniciarPregunta();
        }

      } else {
        this.jugador.restarVida();
        document.getElementById('btn-d').style.backgroundColor = "red";
        alert("la opcion correcta es " + respuesta);
      }
    });


  }




  // Método para iniciar el temporizador de cada pregunta
  startTimer() {
    console.log("estoy en el start timer")

    function startProgressBar() {
      const progressBar = document.getElementById('progress-bar');
      const progress = document.createElement('div');
      progress.className = 'progress';
      progressBar.appendChild(progress);

      let width = 100;
      const intervalId = setInterval(() => {
        width -= 10; // Disminuye la barra en un 10% cada segundo
        progress.style.width = width + '%';

        if (width <= 0) {
          clearInterval(intervalId);
          alert("la opcion correcta es " + respuesta);
          this.jugador.restarVida();
          this.preguntaActual++;
          // passar a la siguiente pregunta
          if (this.preguntaActual == 10) {
            this.finalizarJuego();
          } else {
            this.iniciarPregunta();
          }

          // Aquí puedes realizar alguna acción cuando la barra llegue a cero
        }
      }, 1000); // Intervalo de tiempo en milisegundos (1 segundo)
    }

    // Llamada a la función para iniciar la barra de progreso
    startProgressBar();

  }


  finalizarJuego() { // joao
    if (!victoria) {
      "game over"
      this.banderas = [];
    } else {
      "haz ganado"
      this.banderas = [];
    }
  }
}
let a = new Juego
a.iniciarJuego()
a.verificarRespuesta("brasil")
a.startTimer()



