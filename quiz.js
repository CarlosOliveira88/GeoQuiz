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

//devuelve la ruta de la imagen de la bandera correspondiente
function getBanderaPorNombre(nom) {
  let banderaObj = newBanderas.find(bandera => bandera.pais == nom)
  return banderaObj.bandera
}


// Clase Jugador
class Jugador {
  constructor() {
    this.vida1 = document.getElementById("vida-1");
    this.vida2 = document.getElementById("vida-2");
    this.totalVidas = 2;
    this.aciertos = 0;

  }
  restarVida() {
    this.totalVidas--;
  }
  sumarAcierto() {
    this.aciertos++;
  }
}


setInterval(() => {
  if (juego.seguirAnimando) {
    document.querySelector("#progress-bar").style.width = juego.barraProgresso + "%"
    juego.barraProgresso += 12.5  //juego.barraProgresso += 100 / 8 ;alcanzando el 100% después de 8 segundos.
    //La propiedad "barraProgresso" del objeto "juego" se incrementa en 12.5 en cada iteración (equivalente a aumentar en 12.5% en cada segundo),

  }
}, 1000)


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
    //this.tiempoPregunta = 8000; // Tiempo para responder cada pregunta
    this.intervalId = null; // ID del intervalo de tiempo para la pregunta actual
    this.jugador = new Jugador(); // Instancia de la clase Jugador
    // this.tiempoRestante = 0;
    this.timer = undefined
    // this.aciertos = 0;
    // this.aciertos = 0;
    this.bloquear = false
    this.preguntas = []
    this.barraProgresso = 0
    this.seguirAnimando = true
  }


  generarPreguntas() {
    let quiz = []


    let paises = newBanderas.map(item => item.pais)
    for (let i = 0; i < 10; i++) {
      let ramdomIndex = Math.floor(Math.random() * paises.length)
      let paisActual = paises[ramdomIndex]


      let respuestasIncorrectas = []
      while (respuestasIncorrectas.length < 3) {
        let paises = newBanderas.map(item => item.pais)
        let ramdomIndex = Math.floor(Math.random() * paises.length)
        let paisIncorrecto = paises[ramdomIndex]
        if (!respuestasIncorrectas.includes(paisIncorrecto) && paisIncorrecto != paisActual) {
          respuestasIncorrectas.push(paisIncorrecto)   //Si ambas condiciones se cumplen (es decir, el país incorrecto no está en el array respuestasIncorrectas y no es igual al país actual),
        }
      }


      let ramdom0a3 = Math.floor(Math.random() * 3) //0y 2
      let options = [...respuestasIncorrectas.slice(0, ramdom0a3), paisActual, ...respuestasIncorrectas.slice(ramdom0a3)]


      quiz.push(    //Se crea un objeto con pregunta correcta y no incorrectas para cada pregunta
        {
          respuesta: paisActual,
          opcions: options
        }
      )


      // console.log(paisActual);
      // console.log(respuestasIncorrectas);


      paises.splice(ramdomIndex, 1)   //: Este código elimina el país actual del array paises para asegurarse de que no se repita 
      //asi garantizamos que cada pregunta del cuestionario sea sobre un país diferente.
    }
    console.log(quiz);
    this.preguntas = quiz
  }


  // Método para iniciar el juego
  // iniciarJuego() { // joao
  //   // generar el array de opciones
  //   let preguntaAleatoria = a()
  //   function a() {
  //     const indiceAleatorio = Math.floor(Math.random() * newBanderas.length);
  //     return newBanderas[indiceAleatorio]
  //   }


  //   this.imageBandera.src = preguntaAleatoria.bandera;
  //   this.banderas.push(preguntaAleatoria.pais);
  //   this.banderas.push(a().pais)
  //   this.banderas.push(a().pais)
  //   this.banderas.push(a().pais)
  //   console.log(this.banderas)


  //   let botonA = document.getElementById('span-a');
  //   botonA.innerHTML = this.banderas[0];
  //   let botonB = document.getElementById('span-b');
  //   botonB.innerHTML = this.banderas[1];
  //   let botonC = document.getElementById('span-c');
  //   botonC.innerHTML = this.banderas[2];
  //   let botonD = document.getElementById('span-d');
  //   botonD.innerHTML = this.banderas[3];

  // }


  iniciarJuego() {
    this.siguentePregunta()
  }

  siguentePregunta() {
    this.seguirAnimando = true
    if (this.preguntaActual == 10 || this.jugador.totalVidas == -1) {
      juego.seguirAnimando = false
      juego.barraProgresso = "100%"
      alert("Juego finalizado")
      return
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



