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
function getBanderaPorNombre(nom){   
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


setInterval(()=>{
  if (juego.seguirAnimando) {
    document.querySelector("#progress-bar").style.width = juego.barraProgresso+"%"
    juego.barraProgresso += 12.5  //juego.barraProgresso += 100 / 8 ;alcanzando el 100% después de 8 segundos.
      //La propiedad "barraProgresso" del objeto "juego" se incrementa en 12.5 en cada iteración (equivalente a aumentar en 12.5% en cada segundo),

  }
},1000)


// Clase Juego
class Juego {
  constructor() {
    this.imageBandera = document.getElementById("imgBandera");
    this.banderas = [];
    this.preguntaActual = 0;
    //this.tiempoPregunta = 8000; // Tiempo para responder cada pregunta
    this.intervalId = null; // ID del intervalo de tiempo para la pregunta actual
    this.jugador = new Jugador(); // Instancia de la clase Jugador
    // this.tiempoRestante = 0;
    this.timer = undefined
    // this.aciertos = 0;
    // this.aciertos = 0;
    this.bloquear=false
    this.preguntas = []
    this.barraProgresso = 0
    this.seguirAnimando = true
  }


  generarPreguntas(){
    let quiz = [ ]


    let paises = newBanderas.map(item=>item.pais)  
    for (let i = 0; i < 10; i++) {
      let ramdomIndex = Math.floor(Math.random()*paises.length)
      let paisActual = paises[ramdomIndex]


      let respuestasIncorrectas = []
      while(respuestasIncorrectas.length<3){
        let paises = newBanderas.map(item=>item.pais)    
        let ramdomIndex = Math.floor(Math.random()*paises.length)
        let paisIncorrecto = paises[ramdomIndex]
        if (!respuestasIncorrectas.includes(paisIncorrecto) && paisIncorrecto != paisActual) {  
            respuestasIncorrectas.push(paisIncorrecto)   //Si ambas condiciones se cumplen (es decir, el país incorrecto no está en el array respuestasIncorrectas y no es igual al país actual),
        }
      }


      let ramdom0a3 = Math.floor(Math.random()*3) //0y 2
      let options = [...respuestasIncorrectas.slice(0, ramdom0a3), paisActual, ...respuestasIncorrectas.slice(ramdom0a3) ]


      quiz.push(    //Se crea un objeto con pregunta correcta y no incorrectas para cada pregunta
        {
          respuesta:paisActual,
          opcions:options
        }
      )


      // console.log(paisActual);
      // console.log(respuestasIncorrectas);


      paises.splice(ramdomIndex,1)   //: Este código elimina el país actual del array paises para asegurarse de que no se repita 
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


  iniciarJuego(){
    this.siguentePregunta()
  }
   
  siguentePregunta(){
    this.seguirAnimando  = true
    if (this.preguntaActual == 10 || this.jugador.totalVidas == -1) {
      juego.seguirAnimando = false
      juego.barraProgresso = "100%"
      alert("Juego finalizado")
      return
    }


    if (this.jugador.totalVidas == 1) {
      document.querySelector("#vida-2").style.opacity = 0
    }
    if (this.jugador.totalVidas == 0) {
      document.querySelector("#vida-1").style.opacity = 0
    }
   


    this.startTimer = setTimeout(()=>{  //temporizador; starttimer una variable
      juego.barraProgresso = 0
      let preguntaObj = this.preguntas[this.preguntaActual]


      //mostrar la respeusta correcta en verde
      let correctIndex = preguntaObj.opcions.indexOf(preguntaObj.respuesta)
      let button = document.getElementById("option"+correctIndex).parentElement
      button.classList.add("correcto")


      this.jugador.restarVida()
      this.preguntaActual++
      this.actualizarTextos()
     
      setTimeout(()=>{
        this.siguentePregunta();
        document.querySelector(".incorrecto")?.classList.remove("incorrecto")
        document.querySelector(".correcto")?.classList.remove("correcto")
        this.bloquear = false
      }, 700)


    },8000)


    let preguntaActual = this.preguntas[this.preguntaActual]
    console.log("preguna actual:");
    console.log(preguntaActual);


    document.getElementById("option0").innerText = preguntaActual.opcions[0]
    document.getElementById("option1").innerText = preguntaActual.opcions[1]
    document.getElementById("option2").innerText = preguntaActual.opcions[2]
    document.getElementById("option3").innerText = preguntaActual.opcions[3]
    document.getElementById("imgBandera").src =  getBanderaPorNombre(preguntaActual.respuesta)


  }
 
  //verificarRespuesta(respuesta)
  // verificarRespuesta(respuestaSeleccionada) {
  //   // Se obtiene la respuesta correcta de acuerdo a la pregunta actual
  //   const respuestaCorrecta = this.banderas[this.preguntaActual];
 
  //   // Se compara la respuesta seleccionada con la respuesta correcta
  //   if (respuestaSeleccionada === respuestaCorrecta) {
  //     // Si la respuesta es correcta, se incrementa el contador de aciertos del jugador
  //     this.jugador.sumarAcierto();
  //   } else {
  //     // Si la respuesta es incorrecta, se resta una vida al jugador
  //     this.jugador.restarVida();
 
  //     // Si el jugador se queda sin vidas, se finaliza el juego
  //     if (this.jugador.totalVidas === 0) {
  //       this.finalizarJuego();
  //     }
  //   }
 
  //   // Continuar con el flujo del juego
  //   // this.iniciarJuego();
  //   this.preguntaActual++; // Avanzar a la siguiente pregunta
  //    // Mostrar la siguiente pregunta
  // }
  verificarRespuesta(index ){  
    clearTimeout(this.startTimer)  //detener el temporizador de la pregunta actual
    juego.barraProgresso = 0
    if (this.bloquear ) {
      return
    }else{
      this.bloquear = true
    }
   
    let preguntaObj = this.preguntas[this.preguntaActual]
    let respuestaDelUsuario = preguntaObj.opcions[index]


    //mostrar la respeusta correcta en verde
    let correctIndex = preguntaObj.opcions.indexOf(preguntaObj.respuesta)
    let button = document.getElementById("option"+correctIndex).parentElement
    button.classList.add("correcto")


    if ( respuestaDelUsuario == preguntaObj.respuesta) {
        // let button = document.getElementById("option"+index).parentElement
        // button.classList.add("correcto")
        this.jugador.sumarAcierto()


    }else{
        console.log("incorrecto");
        let button = document.getElementById("option"+index).parentElement
        button.classList.add("incorrecto")
        this.jugador.restarVida()
    }
   


    this.preguntaActual++
    this.actualizarTextos()


    setTimeout(()=>{
      this.siguentePregunta();
      document.querySelector(".incorrecto")?.classList.remove("incorrecto")
      document.querySelector(".correcto")?.classList.remove("correcto")
      this.bloquear = false
    }, 700)
  }
  actualizarTextos(){
    document.getElementById("aciertos-text").innerText = this.jugador.aciertos
    document.getElementById("recuento").innerText = this.preguntaActual+" / 10"
  }
  // siguentePregunta(){
   


  // }


  // Método para iniciar el temporizador de cada pregunta
  // startTimer() { // ana
  //   const progressBar = document.getElementById('progress-bar');
  //   let timeLeft = this.tiempoPregunta / 1000;
  //   progressBar.style.width = '100%';
  //   progressBar.style.transition = `width ${timeLeft}s linear`;


  //   this.intervalId = setInterval(() => {
  //     timeLeft--;
  //     progressBar.style.width = `${(timeLeft / (this.tiempoPregunta / 1000)) * 100}%`;


  //     if (timeLeft === 0) {
  //       clearInterval(this.intervalId);
  //       this.verificarRespuesta(null);
  //     }
  //   }, 1000);
  // }
  

  finalizarJuego() {
    // Aquí puedes realizar acciones adicionales al finalizar el juego
    // Por ejemplo, mostrar una pantalla de resultados, reiniciar el juego, etc.
    console.log("Juego finalizado");
  }
}


// ...
function botonVerificarRespuesta(respuestaSeleccionada) {
  juego.verificarRespuesta(respuestaSeleccionada);
}


let juego = new Juego(); // Crear instancia de la clase Juego
juego.generarPreguntas();
juego.iniciarJuego();


function volverAJugar(){
  clearTimeout(juego.startTimer)


  juego.barraProgresso = "0%"
  juego.seguirAnimando = true
  juego = new Juego();
  juego.generarPreguntas();
  juego.iniciarJuego();
  juego.actualizarTextos()
 
}
// const respuestaSeleccionada = "Brasil"; // La respuesta seleccionada por el jugador
// juego.verificarRespuesta(respuestaSeleccionada);











