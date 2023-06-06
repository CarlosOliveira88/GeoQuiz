const preguntasGeografia = [
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestaCorrecta: "El río Amazonas",
        respuestasFalsas: ["El río Nilo", "El río Yangtsé", "El río Misisipi"]
    },
    {
        pregunta: "¿Cuál es el país más pequeño del mundo?",
        respuestaCorrecta: "El Vaticano",
        respuestasFalsas: ["Mónaco", "Nauru", "Tuvalu"]
    },
    {
        pregunta: "¿Cuál es la montaña más alta de África?",
        respuestaCorrecta: "El monte Kilimanjaro",
        respuestasFalsas: ["El monte Everest", "El monte Aconcagua", "El monte Denali"]
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo en términos de área?",
        respuestaCorrecta: "Rusia",
        respuestasFalsas: ["Canadá", "China", "Estados Unidos"]
    },
    {
        pregunta: "¿Cuál es el país con más islas en el mundo?",
        respuestaCorrecta: "Suecia",
        respuestasFalsas: ["Filipinas", "Indonesia", "Grecia"]
    },
    {
        pregunta: "¿Cuál es el país con la población más grande del mundo?",
        respuestaCorrecta: "China",
        respuestasFalsas: ["India", "Estados Unidos", "Indonesia"]
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        respuestaCorrecta: "El océano Pacífico",
        respuestasFalsas: ["El océano Atlántico", "El océano Índico", "El océano Ártico"]
    },
    {
        pregunta: "¿Cuál es el desierto más grande del mundo?",
        respuestaCorrecta: "El desierto del Sahara",
        respuestasFalsas: ["El desierto de Gobi", "El desierto de Atacama", "El desierto de Kalahari"]
    },
    {
        pregunta: "¿Cuál es la ciudad más poblada del mundo?",
        respuestaCorrecta: "Tokio",
        respuestasFalsas: ["Delhi", "Shanghái", "Ciudad de México"]
    },
    {
        pregunta: "¿Cuál es el país con la mayor cantidad de volcanes?",
        respuestaCorrecta: "Indonesia",
        respuestasFalsas: ["Japón", "Italia", "Chile"]
    },
    {
        pregunta: "¿Cuál es el país más poblado de Europa?",
        respuestaCorrecta: "Rusia",
        respuestasFalsas: ["Alemania", "Reino Unido", "Francia"]
    },
    {
        pregunta: "¿Cuál es el lago más profundo del mundo?",
        respuestaCorrecta: "El lago Baikal",
        respuestasFalsas: ["El lago Victoria", "El lago Tanganica", "El lago Superior"]
    },
    {
        pregunta: "¿Cuál es la capital de Australia?",
        respuestaCorrecta: "Canberra",
        respuestasFalsas: ["Sídney", "Melbourne", "Brisbane"]
    },
    {
        pregunta: "¿Cuál es el país con la mayor cantidad de islas volcánicas?",
        respuestaCorrecta: "Indonesia",
        respuestasFalsas: ["Japón", "Filipinas", "Nueva Zelanda"]
    },
    {
        pregunta: "¿Cuál es el país más grande de Sudamérica?",
        respuestaCorrecta: "Brasil",
        respuestasFalsas: ["Argentina", "Perú", "Colombia"]
    },
    {
        pregunta: "¿Cuál es el país con más ríos en el mundo?",
        respuestaCorrecta: "Brasil",
        respuestasFalsas: ["China", "Rusia", "Estados Unidos"]
    },
    {
        pregunta: "¿Cuál es el archipiélago más grande del mundo?",
        respuestaCorrecta: "Indonesia",
        respuestasFalsas: ["Filipinas", "Maldivas", "Japón"]
    },
    {
        pregunta: "¿Cuál es el país con más Patrimonios de la Humanidad según la UNESCO?",
        respuestaCorrecta: "Italia",
        respuestasFalsas: ["España", "China", "México"]
    },
    {
        pregunta: "¿Cuál es el país con el mayor número de fronteras terrestres?",
        respuestaCorrecta: "China",
        respuestasFalsas: ["Rusia", "Brasil", "India"]
    },
    {
        pregunta: "¿Cuál es el país más llano del mundo?",
        respuestaCorrecta: "Maldivas",
        respuestasFalsas: ["Países Bajos", "Bangladesh", "Qatar"]
    },
    {
        pregunta: "¿Cuál es el país más grande de África?",
        respuestaCorrecta: "Argelia",
        respuestasFalsas: ["Sudáfrica", "República Democrática del Congo", "Nigeria"]
    },
    {
        pregunta: "¿Cuál es el punto más alto de América del Norte?",
        respuestaCorrecta: "El monte McKinley (Denali)",
        respuestasFalsas: ["El monte Rainier", "El monte Orizaba", "El monte Logan"]
    },
    {
        pregunta: "¿Cuál es la capital de Canadá?",
        respuestaCorrecta: "Ottawa",
        respuestasFalsas: ["Toronto", "Vancouver", "Montreal"]
    },
    {
        pregunta: "¿Cuál es el país con más volcanes activos en el mundo?",
        respuestaCorrecta: "Indonesia",
        respuestasFalsas: ["Japón", "Italia", "Chile"]
    },
    {
        pregunta: "¿Cuál es la cascada más alta del mundo?",
        respuestaCorrecta: "El Salto Ángel",
        respuestasFalsas: ["Las Cataratas del Iguazú", "Las Cataratas del Niágara", "La Cascada del Velo de la Novia"]
    },
    {
        pregunta: "¿Cuál es el país más pequeño de América del Sur?",
        respuestaCorrecta: "Surinam",
        respuestasFalsas: ["Uruguay", "Guyana", "Ecuador"]
    },
    {
        pregunta: "¿Cuál es el golfo más grande del mundo?",
        respuestaCorrecta: "Golfo de México",
        respuestasFalsas: ["Golfo de Bengala", "Golfo Pérsico", "Golfo de Guinea"]
    },
    {
        pregunta: "¿Cuál es el país con más Patrimonios de la Humanidad según la UNESCO?",
        respuestaCorrecta: "Italia",
        respuestasFalsas: ["España", "China", "México"]
    },
    {
        pregunta: "¿Cuál es la ciudad más alta del mundo?",
        respuestaCorrecta: "La Paz",
        respuestasFalsas: ["Cuzco", "Kathmandú", "El Alto"]
    },
    {
        pregunta: "¿Cuál es la isla más grande del mundo?",
        respuestaCorrecta: "Groenlandia",
        respuestasFalsas: ["Borneo", "Madagascar", "Sumatra"]
    }
];

const BANDERAS = [
    {
        pais: "Brasil",
        bandera: "brasil.webp",
        capital: "Brasilia",
        continente: "América del Sur"
    },
    {
        pais: "Estados Unidos",
        bandera: "estadosunidos.webp",
        capital: "Washington D.C.",
        continente: "América del Norte"
    },
    {
        pais: "Canadá",
        bandera: "canada.webp",
        capital: "Ottawa",
        continente: "América del Norte"
    },
    {
        pais: "México",
        bandera: "mexico.webp",
        capital: "Ciudad de México",
        continente: "América del Norte"
    },
    {
        pais: "Argentina",
        bandera: "argentina.webp",
        capital: "Buenos Aires",
        continente: "América del Sur"
    },
    {
        pais: "Colombia",
        bandera: "colombia.webp",
        capital: "Bogotá",
        continente: "América del Sur"
    },
    {
        pais: "Perú",
        bandera: "peru.webp",
        capital: "Lima",
        continente: "América del Sur"
    },
    {
        pais: "Venezuela",
        bandera: "venezuela.webp",
        capital: "Caracas",
        continente: "América del Sur"
    },
    {
        pais: "Chile",
        bandera: "chile.webp",
        capital: "Santiago",
        continente: "América del Sur"
    },
    {
        pais: "Ecuador",
        bandera: "ecuador.webp",
        capital: "Quito",
        continente: "América del Sur"
    },
    {
        pais: "Reino Unido",
        bandera: "reinounido.webp",
        capital: "Londres",
        continente: "Europa"
    },
    {
        pais: "Francia",
        bandera: "francia.webp",
        capital: "París",
        continente: "Europa"
    },
    {
        pais: "Alemania",
        bandera: "alemania.webp",
        capital: "Berlín",
        continente: "Europa"
    },
    {
        pais: "Italia",
        bandera: "italia.webp",
        capital: "Roma",
        continente: "Europa"
    },
    {
        pais: "España",
        bandera: "espana.webp",
        capital: "Madrid",
        continente: "Europa"
    },
    {
        pais: "Portugal",
        bandera: "portugal.webp",
        capital: "Lisboa",
        continente: "Europa"
    },
    {
        pais: "Suecia",
        bandera: "suecia.webp",
        capital: "Estocolmo",
        continente: "Europa"
    },
    {
        pais: "Noruega",
        bandera: "noruega.webp",
        capital: "Oslo",
        continente: "Europa"
    },
    {
        pais: "Suiza",
        bandera: "suiza.webp",
        capital: "Berna",
        continente: "Europa"
    },
    {
        pais: "Rusia",
        bandera: "rusia.webp",
        capital: "Moscú",
        continente: "Europa/Asia"
    },
    {
        pais: "China",
        bandera: "china.webp",
        capital: "Pekín",
        continente: "Asia"
    },
    {
        pais: "Japón",
        bandera: "japon.webp",
        capital: "Tokio",
        continente: "Asia"
    },
    {
        pais: "India",
        bandera: "india.webp",
        capital: "Nueva Delhi",
        continente: "Asia"
    },
    {
        pais: "Corea del Sur",
        bandera: "coreadelsur.webp",
        capital: "Seúl",
        continente: "Asia"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Brunei",
        bandera: "brunei.webp",
        capital: "Bandar Seri Begawan",
        continente: "Asia"
    },
    {
        pais: "Camboya",
        bandera: "camboya.webp",
        capital: "Nom Pen",
        continente: "Asia"
    },
    {
        pais: "Indonesia",
        bandera: "indonesia.webp",
        capital: "Yakarta",
        continente: "Asia"
    },
    {
        pais: "Malasia",
        bandera: "malasia.webp",
        capital: "Kuala Lumpur",
        continente: "Asia"
    },
    {
        pais: "Filipinas",
        bandera: "filipinas.webp",
        capital: "Manila",
        continente: "Asia"
    },
    {
        pais: "Singapur",
        bandera: "singapur.webp",
        capital: "Singapur",
        continente: "Asia"
    },
    {
        pais: "Tailandia",
        bandera: "tailandia.webp",
        capital: "Bangkok",
        continente: "Asia"
    },
    {
        pais: "Vietnam",
        bandera: "vietnam.webp",
        capital: "Hanói",
        continente: "Asia"
    },
    {
        pais: "Afganistán",
        bandera: "afganistan.webp",
        capital: "Kabul",
        continente: "Asia"
    },
    {
        pais: "Arabia Saudita",
        bandera: "arabiasaudita.webp",
        capital: "Riad",
        continente: "Asia"
    },
    {
        pais: "Bangladés",
        bandera: "banglades.webp",
        capital: "Daca",
        continente: "Asia"
    },
    {
        pais: "Emiratos Árabes Unidos",
        bandera: "emiratosarabesunidos.webp",
        capital: "Abu Dabi",
        continente: "Asia"
    },
    {
        pais: "Irak",
        bandera: "irak.webp",
        capital: "Bagdad",
        continente: "Asia"
    },
    {
        pais: "Irán",
        bandera: "iran.webp",
        capital: "Teherán",
        continente: "Asia"
    },
    {
        pais: "Israel",
        bandera: "israel.webp",
        capital: "Jerusalén",
        continente: "Asia"
    },
    {
        pais: "Jordania",
        bandera: "jordania.webp",
        capital: "Amán",
        continente: "Asia"
    },
    {
        pais: "Kuwait",
        bandera: "kuwait.webp",
        capital: "Kuwait",
        continente: "Asia"
    },
    {
        pais: "Líbano",
        bandera: "libano.webp",
        capital: "Beirut",
        continente: "Asia"
    },
    {
        pais: "Omán",
        bandera: "oman.webp",
        capital: "Mascate",
        continente: "Asia"
    },
    {
        pais: "Palestina",
        bandera: "palestina.webp",
        capital: "Jerusalén",
        continente: "Asia"
    },
    {
        pais: "Qatar",
        bandera: "qatar.webp",
        capital: "Doha",
        continente: "Asia"
    },
    {
        pais: "Siria",
        bandera: "siria.webp",
        capital: "Damasco",
        continente: "Asia"
    },
    {
        pais: "Turquía",
        bandera: "turquia.webp",
        capital: "Ankara",
        continente: "Asia/Europa"
    },
    {
        pais: "Yemen",
        bandera: "yemen.webp",
        capital: "Saná",
        continente: "Asia"
    },
    {
        pais: "Sudáfrica",
        bandera: "sudafrica.webp",
        capital: "Pretoria",
        continente: "África"
    },
    {
        pais: "Nigeria",
        bandera: "nigeria.webp",
        capital: "Abuya",
        continente: "África"
    },
    {
        pais: "Egipto",
        bandera: "egipto.webp",
        capital: "El Cairo",
        continente: "África"
    },
    {
        pais: "Argelia",
        bandera: "argelia.webp",
        capital: "Argel",
        continente: "África"
    },
    {
        pais: "Angola",
        bandera: "angola.webp",
        capital: "Luanda",
        continente: "África"
    },
    {
        pais: "Marruecos",
        bandera: "marruecos.webp",
        capital: "Rabat",
        continente: "África"
    },
    {
        pais: "Sudán",
        bandera: "sudan.webp",
        capital: "Jartum",
        continente: "África"
    },
    {
        pais: "Kenia",
        bandera: "kenia.webp",
        capital: "Nairobi",
        continente: "África"
    },
    {
        pais: "Etiopía",
        bandera: "etiopia.webp",
        capital: "Adís Abeba",
        continente: "África"
    },
    {
        pais: "Ghana",
        bandera: "ghana.webp",
        capital: "Acra",
        continente: "África"
    },
    {
        pais: "Congo",
        bandera: "congo.webp",
        capital: "Brazzaville",
        continente: "África"
    },
    {
        pais: "Tanzania",
        bandera: "tanzania.webp",
        capital: "Dodoma",
        continente: "África"
    },
    {
        pais: "Uganda",
        bandera: "uganda.webp",
        capital: "Kampala",
        continente: "África"
    },
    {
        pais: "Rwanda",
        bandera: "rwanda.webp",
        capital: "Kigali",
        continente: "África"
    },
    {
        pais: "Zambia",
        bandera: "zambia.webp",
        capital: "Lusaka",
        continente: "África"
    },
    {
        pais: "Zimbabwe",
        bandera: "zimbabwe.webp",
        capital: "Harare",
        continente: "África"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Fiyi",
        bandera: "fiyi.webp",
        capital: "Suva",
        continente: "Oceanía"
    },
    {
        pais: "Samoa",
        bandera: "samoa.webp",
        capital: "Apia",
        continente: "Oceanía"
    },
    {
        pais: "Tonga",
        bandera: "tonga.webp",
        capital: "Nukualofa",
        continente: "Oceanía"
    },
    {
        pais: "Vanuatu",
        bandera: "vanuatu.webp",
        capital: "Port Vila",
        continente: "Oceanía"
    },
    {
        pais: "Kiribati",
        bandera: "kiribati.webp",
        capital: "Tarawa",
        continente: "Oceanía"
    },
    {
        pais: "Micronesia",
        bandera: "micronesia.webp",
        capital: "Palikir",
        continente: "Oceanía"
    },
    {
        pais: "Papúa Nueva Guinea",
        bandera: "papuanuevaguinea.webp",
        capital: "Puerto Moresby",
        continente: "Oceanía"
    },
    {
        pais: "Islas Salomón",
        bandera: "islassalomon.webp",
        capital: "Honiara",
        continente: "Oceanía"
    },
    {
        pais: "Timor Oriental",
        bandera: "timororiental.webp",
        capital: "Dili",
        continente: "Asia"
    },
    {
        pais: "Austria",
        bandera: "austria.webp",
        capital: "Viena",
        continente: "Europa"
    },
    {
        pais: "Bélgica",
        bandera: "belgica.webp",
        capital: "Bruselas",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Dinamarca",
        bandera: "dinamarca.webp",
        capital: "Copenhague",
        continente: "Europa"
    },
    {
        pais: "Grecia",
        bandera: "grecia.webp",
        capital: "Atenas",
        continente: "Europa"
    },
    {
        pais: "Holanda",
        bandera: "holanda.webp",
        capital: "Ámsterdam",
        continente: "Europa"
    },
    {
        pais: "Hungría",
        bandera: "hungria.webp",
        capital: "Budapest",
        continente: "Europa"
    },
    {
        pais: "Irlanda",
        bandera: "irlanda.webp",
        capital: "Dublín",
        continente: "Europa"
    },
    {
        pais: "Polonia",
        bandera: "polonia.webp",
        capital: "Varsovia",
        continente: "Europa"
    },
    {
        pais: "Rumania",
        bandera: "rumania.webp",
        capital: "Bucarest",
        continente: "Europa"
    },
    {
        pais: "Suecia",
        bandera: "suecia.webp",
        capital: "Estocolmo",
        continente: "Europa"
    },
    {
        pais: "Ucrania",
        bandera: "ucrania.webp",
        capital: "Kiev",
        continente: "Europa"
    },
    {
        pais: "Finlandia",
        bandera: "finlandia.webp",
        capital: "Helsinki",
        continente: "Europa"
    },
    {
        pais: "Noruega",
        bandera: "noruega.webp",
        capital: "Oslo",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",
        continente: "Europa"
    },
    {
        pais: "Bulgaria",
        bandera: "bulgaria.webp",
        capital: "Sofía",
        continente: "Europa"
    },
    {
        pais: "Suiza",
        bandera: "suiza.webp",
        capital: "Berna",
        continente: "Europa"
    },
    {
        pais: "Chipre",
        bandera: "chipre.webp",
        capital: "Nicosia",
        continente: "Europa"
    },
    {
        pais: "Estonia",
        bandera: "estonia.webp",
        capital: "Tallin",
        continente: "Europa"
    },
    {
        pais: "Letonia",
        bandera: "letonia.webp",
        capital: "Riga",
        continente: "Europa"
    },
    {
        pais: "Lituania",
        bandera: "lituania.webp",
        capital: "Vilna",
        continente: "Europa"
    },
    {
        pais: "Moldavia",
        bandera: "moldavia.webp",
        capital: "Chisináu",
        continente: "Europa"
    },
    {
        pais: "Montenegro",
        bandera: "montenegro.webp",
        capital: "Podgorica",
        continente: "Europa"
    },
    {
        pais: "Serbia",
        bandera: "serbia.webp",
        capital: "Belgrado",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Albania",
        bandera: "albania.webp",
        capital: "Tirana",
        continente: "Europa"
    },
    {
        pais: "Bosnia y Herzegovina",
        bandera: "bosniaherzegovina.webp",
        capital: "Sarajevo",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Macedonia del Norte",
        bandera: "macedoniadelnorte.webp",
        capital: "Skopie",
        continente: "Europa"
    },
    {
        pais: "Montenegro",
        bandera: "montenegro.webp",
        capital: "Podgorica",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",
        continente: "Europa"
    },
    {
        pais: "Alemania",
        bandera: "alemania.webp",
        capital: "Berlín",
        continente: "Europa"
    },
    {
        pais: "Italia",
        bandera: "italia.webp",
        capital: "Roma",
        continente: "Europa"
    },
    {
        pais: "Francia",
        bandera: "francia.webp",
        capital: "París",
        continente: "Europa"
    },
    {
        pais: "Reino Unido",
        bandera: "reinounido.webp",
        capital: "Londres",
        continente: "Europa"
    },
    {
        pais: "España",
        bandera: "espana.webp",
        capital: "Madrid",
        continente: "Europa"
    },
    {
        pais: "Portugal",
        bandera: "portugal.webp",
        capital: "Lisboa",
        continente: "Europa"
    },
    {
        pais: "Bielorrusia",
        bandera: "bielorrusia.webp",
        capital: "Minsk",
        continente: "Europa"
    },
    {
        pais: "Kazajistán",
        bandera: "kazajistan.webp",
        capital: "Nur-Sultán",
        continente: "Asia"
    },
    {
        pais: "Uzbekistán",
        bandera: "uzbekistan.webp",
        capital: "Taskent",
        continente: "Asia"
    },
    {
        pais: "Turkmenistán",
        bandera: "turkmenistan.webp",
        capital: "Asjabad",
        continente: "Asia"
    },
    {
        pais: "Tayikistán",
        bandera: "tayikistan.webp",
        capital: "Dusambé",
        continente: "Asia"
    },
    {
        pais: "Kirguistán",
        bandera: "kirguistan.webp",
        capital: "Biskek",
        continente: "Asia"
    },
    {
        pais: "Tailandia",
        bandera: "tailandia.webp",
        capital: "Bangkok",
        continente: "Asia"
    },
    {
        pais: "Malasia",
        bandera: "malasia.webp",
        capital: "Kuala Lumpur",
        continente: "Asia"
    },
    {
        pais: "Singapur",
        bandera: "singapur.webp",
        capital: "Singapur",
        continente: "Asia"
    },
    {
        pais: "Indonesia",
        bandera: "indonesia.webp",
        capital: "Yakarta",
        continente: "Asia"
    },
    {
        pais: "Filipinas",
        bandera: "filipinas.webp",
        capital: "Manila",
        continente: "Asia"
    },
    {
        pais: "Vietnam",
        bandera: "vietnam.webp",
        capital: "Hanói",
        continente: "Asia"
    },
    {
        pais: "Laos",
        bandera: "laos.webp",
        capital: "Vientián",
        continente: "Asia"
    },
    {
        pais: "Camboya",
        bandera: "camboya.webp",
        capital: "Nom Pen",
        continente: "Asia"
    },
    {
        pais: "Myanmar",
        bandera: "myanmar.webp",
        capital: "Naypyidaw",
        continente: "Asia"
    },
    {
        pais: "Bangladesh",
        bandera: "bangladesh.webp",
        capital: "Daca",
        continente: "Asia"
    },
    {
        pais: "Pakistán",
        bandera: "pakistan.webp",
        capital: "Islamabad",
        continente: "Asia"
    },
    {
        pais: "India",
        bandera: "india.webp",
        capital: "Nueva Delhi",
        continente: "Asia"
    },
    {
        pais: "Sri Lanka",
        bandera: "srilanka.webp",
        capital: "Colombo",
        continente: "Asia"
    },
    {
        pais: "Maldivas",
        bandera: "maldivas.webp",
        capital: "Malé",
        continente: "Asia"
    },
    {
        pais: "China",
        bandera: "china.webp",
        capital: "Pekín",
        continente: "Asia"
    },
    {
        pais: "Japón",
        bandera: "japon.webp",
        capital: "Tokio",
        continente: "Asia"
    },
    {
        pais: "Corea del Sur",
        bandera: "coreadelsur.webp",
        capital: "Seúl",
        continente: "Asia"
    },
    {
        pais: "Corea del Norte",
        bandera: "coreadelnorte.webp",
        capital: "Pionyang",
        continente: "Asia"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Fiyi",
        bandera: "fiyi.webp",
        capital: "Suva",
        continente: "Oceanía"
    },
    {
        pais: "Samoa",
        bandera: "samoa.webp",
        capital: "Apia",
        continente: "Oceanía"
    },
    {
        pais: "Tonga",
        bandera: "tonga.webp",
        capital: "Nukualofa",
        continente: "Oceanía"
    },
    {
        pais: "Vanuatu",
        bandera: "vanuatu.webp",
        capital: "Port Vila",
        continente: "Oceanía"
    },
    {
        pais: "Kiribati",
        bandera: "kiribati.webp",
        capital: "Tarawa",
        continente: "Oceanía"
    },
    {
        pais: "Micronesia",
        bandera: "micronesia.webp",
        capital: "Palikir",
        continente: "Oceanía"
    },
    {
        pais: "Papúa Nueva Guinea",
        bandera: "papuanuevaguinea.webp",
        capital: "Puerto Moresby",
        continente: "Oceanía"
    },
    {
        pais: "Islas Salomón",
        bandera: "islassalomon.webp",
        capital: "Honiara",
        continente: "Oceanía"
    },
    {
        pais: "Timor Oriental",
        bandera: "timororiental.webp",
        capital: "Dili",
        continente: "Asia"
    },
    {
        pais: "Austria",
        bandera: "austria.webp",
        capital: "Viena",
        continente: "Europa"
    },
    {
        pais: "Bélgica",
        bandera: "belgica.webp",
        capital: "Bruselas",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Dinamarca",
        bandera: "dinamarca.webp",
        capital: "Copenhague",
        continente: "Europa"
    },
    {
        pais: "Grecia",
        bandera: "grecia.webp",
        capital: "Atenas",
        continente: "Europa"
    },
    {
        pais: "Holanda",
        bandera: "holanda.webp",
        capital: "Ámsterdam",
        continente: "Europa"
    },
    {
        pais: "Hungría",
        bandera: "hungria.webp",
        capital: "Budapest",
        continente: "Europa"
    },
    {
        pais: "Irlanda",
        bandera: "irlanda.webp",
        capital: "Dublín",
        continente: "Europa"
    },
    {
        pais: "Polonia",
        bandera: "polonia.webp",
        capital: "Varsovia",
        continente: "Europa"
    },
    {
        pais: "Rumania",
        bandera: "rumania.webp",
        capital: "Bucarest",
        continente: "Europa"
    },
    {
        pais: "Suecia",
        bandera: "suecia.webp",
        capital: "Estocolmo",
        continente: "Europa"
    },
    {
        pais: "Ucrania",
        bandera: "ucrania.webp",
        capital: "Kiev",
        continente: "Europa"
    },
    {
        pais: "Finlandia",
        bandera: "finlandia.webp",
        capital: "Helsinki",
        continente: "Europa"
    },
    {
        pais: "Noruega",
        bandera: "noruega.webp",
        capital: "Oslo",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",
        continente: "Europa"
    },
    {
        pais: "Bulgaria",
        bandera: "bulgaria.webp",
        capital: "Sofía",
        continente: "Europa"
    },
    {
        pais: "Suiza",
        bandera: "suiza.webp",
        capital: "Berna",
        continente: "Europa"
    },
    {
        pais: "Chipre",
        bandera: "chipre.webp",
        capital: "Nicosia",
        continente: "Europa"
    },
    {
        pais: "Estonia",
        bandera: "estonia.webp",
        capital: "Tallin",
        continente: "Europa"
    },
    {
        pais: "Letonia",
        bandera: "letonia.webp",
        capital: "Riga",
        continente: "Europa"
    },
    {
        pais: "Lituania",
        bandera: "lituania.webp",
        capital: "Vilna",
        continente: "Europa"
    },
    {
        pais: "Moldavia",
        bandera: "moldavia.webp",
        capital: "Chisináu",
        continente: "Europa"
    },
    {
        pais: "Montenegro",
        bandera: "montenegro.webp",
        capital: "Podgorica",
        continente: "Europa"
    },
    {
        pais: "Serbia",
        bandera: "serbia.webp",
        capital: "Belgrado",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Albania",
        bandera: "albania.webp",
        capital: "Tirana",
        continente: "Europa"
    },
    {
        pais: "Bosnia y Herzegovina",
        bandera: "bosniaherzegovina.webp",
        capital: "Sarajevo",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Macedonia del Norte",
        bandera: "macedoniadelnorte.webp",
        capital: "Skopie",
        continente: "Europa"
    },
    {
        pais: "Montenegro",
        bandera: "montenegro.webp",
        capital: "Podgorica",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",
        continente: "Europa"
    },
    {
        pais: "Alemania",
        bandera: "alemania.webp",
        capital: "Berlín",
        continente: "Europa"
    },
    {
        pais: "Italia",
        bandera: "italia.webp",
        capital: "Roma",
        continente: "Europa"
    },
    {
        pais: "Francia",
        bandera: "francia.webp",
        capital: "París",
        continente: "Europa"
    },
    {
        pais: "Reino Unido",
        bandera: "reinounido.webp",
        capital: "Londres",
        continente: "Europa"
    },
    {
        pais: "España",
        bandera: "espana.webp",
        capital: "Madrid",
        continente: "Europa"
    },
    {
        pais: "Portugal",
        bandera: "portugal.webp",
        capital: "Lisboa",
        continente: "Europa"
    },
    {
        pais: "Bielorrusia",
        bandera: "bielorrusia.webp",
        capital: "Minsk",
        continente: "Europa"
    },
    {
        pais: "Kazajistán",
        bandera: "kazajistan.webp",
        capital: "Nur-Sultán",
        continente: "Asia"
    },
    {
        pais: "Uzbekistán",
        bandera: "uzbekistan.webp",
        capital: "Taskent",
        continente: "Asia"
    },
    {
        pais: "Turkmenistán",
        bandera: "turkmenistan.webp",
        capital: "Asjabad",
        continente: "Asia"
    },
    {
        pais: "Tayikistán",
        bandera: "tayikistan.webp",
        capital: "Dusambé",
        continente: "Asia"
    },
    {
        pais: "Kirguistán",
        bandera: "kirguistan.webp",
        capital: "Biskek",
        continente: "Asia"
    },
    {
        pais: "Tailandia",
        bandera: "tailandia.webp",
        capital: "Bangkok",
        continente: "Asia"
    },
    {
        pais: "Malasia",
        bandera: "malasia.webp",
        capital: "Kuala Lumpur",
        continente: "Asia"
    },
    {
        pais: "Singapur",
        bandera: "singapur.webp",
        capital: "Singapur",
        continente: "Asia"
    },
    {
        pais: "Indonesia",
        bandera: "indonesia.webp",
        capital: "Yakarta",
        continente: "Asia"
    },
    {
        pais: "Filipinas",


        bandera: "filipinas.webp",
        capital: "Manila",
        continente: "Asia"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Fiyi",
        bandera: "fiyi.webp",
        capital: "Suva",
        continente: "Oceanía"
    },
    {
        pais: "Samoa",
        bandera: "samoa.webp",
        capital: "Apia",
        continente: "Oceanía"
    },
    {
        pais: "Tonga",
        bandera: "tonga.webp",
        capital: "Nukualofa",
        continente: "Oceanía"
    },
    {
        pais: "Vanuatu",
        bandera: "vanuatu.webp",
        capital: "Port Vila",
        continente: "Oceanía"
    },
    {
        pais: "Kiribati",
        bandera: "kiribati.webp",
        capital: "Tarawa",
        continente: "Oceanía"
    },
    {
        pais: "Micronesia",
        bandera: "micronesia.webp",
        capital: "Palikir",
        continente: "Oceanía"
    },
    {
        pais: "Papúa Nueva Guinea",
        bandera: "papuanuevaguinea.webp",
        capital: "Puerto Moresby",
        continente: "Oceanía"
    },
    {
        pais: "Islas Salomón",
        bandera: "islassalomon.webp",
        capital: "Honiara",
        continente: "Oceanía"
    },
    {
        pais: "Timor Oriental",
        bandera: "timororiental.webp",
        capital: "Dili",
        continente: "Asia"
    },
    {
        pais: "Austria",
        bandera: "austria.webp",
        capital: "Viena",
        continente: "Europa"
    },
    {
        pais: "Bélgica",
        bandera: "belgica.webp",
        capital: "Bruselas",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Dinamarca",
        bandera: "dinamarca.webp",
        capital: "Copenhague",
        continente: "Europa"
    },
    {
        pais: "Grecia",
        bandera: "grecia.webp",
        capital: "Atenas",
        continente: "Europa"
    },
    {
        pais: "Holanda",
        bandera: "holanda.webp",
        capital: "Ámsterdam",
        continente: "Europa"
    },
    {
        pais: "Hungría",
        bandera: "hungria.webp",
        capital: "Budapest",
        continente: "Europa"
    },
    {
        pais: "Irlanda",
        bandera: "irlanda.webp",
        capital: "Dublín",
        continente: "Europa"
    },


    {
        pais: "Polonia",
        bandera: "polonia.webp",
        capital: "Varsovia",
        continente: "Europa"
    },
    {
        pais: "Rumania",
        bandera: "rumania.webp",
        capital: "Bucarest",
        continente: "Europa"
    },
    {
        pais: "Suecia",
        bandera: "suecia.webp",
        capital: "Estocolmo",
        continente: "Europa"
    },
    {
        pais: "Ucrania",
        bandera: "ucrania.webp",
        capital: "Kiev",
        continente: "Europa"
    },
    {
        pais: "Finlandia",
        bandera: "finlandia.webp",
        capital: "Helsinki",
        continente: "Europa"
    },
    {
        pais: "Noruega",
        bandera: "noruega.webp",
        capital: "Oslo",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",
        continente: "Europa"
    },
    {
        pais: "Bulgaria",
        bandera: "bulgaria.webp",
        capital: "Sofía",
        continente: "Europa"
    },
    {
        pais: "Suiza",
        bandera: "suiza.webp",
        capital: "Berna",
        continente: "Europa"
    },
    {
        pais: "Chipre",
        bandera: "chipre.webp",
        capital: "Nicosia",
        continente: "Europa"
    },
    {
        pais: "Estonia",
        bandera: "estonia.webp",
        capital: "Tallin",
        continente: "Europa"
    },
    {
        pais: "Letonia",
        bandera: "letonia.webp",
        capital: "Riga",
        continente: "Europa"
    },
    {
        pais: "Lituania",
        bandera: "lituania.webp",
        capital: "Vilna",
        continente: "Europa"
    },
    {
        pais: "Moldavia",
        bandera: "moldavia.webp",
        capital: "Chisináu",
        continente: "Europa"
    },
    {
        pais: "Serbia",
        bandera: "serbia.webp",
        capital: "Belgrado",
        continente: "Europa"
    },
    {
        pais: "Albania",
        bandera: "albania.webp",
        capital: "Tirana",
        continente: "Europa"
    },
    {
        pais: "Bosnia y Herzegovina",
        bandera: "bosniaherzegovina.webp",
        capital: "Sarajevo",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Macedonia del Norte",
        bandera: "macedoniadelnorte.webp",
        capital: "Skopie",
        continente: "Europa"
    },
    {
        pais: "Alemania",
        bandera: "alemania.webp",
        capital: "Berlín",
        continente: "Europa"
    },
    {
        pais: "Italia",
        bandera: "italia.webp",
        capital: "Roma",
        continente: "Europa"
    },
    {
        pais: "Francia",
        bandera: "francia.webp",
        capital: "París",
        continente: "Europa"
    },
    {
        pais: "Reino Unido",
        bandera: "reinounido.webp",
        capital: "Londres",
        continente: "Europa"
    },
    {
        pais: "España",
        bandera: "espana.webp",
        capital: "Madrid",
        continente: "Europa"
    },
    {
        pais: "Portugal",
        bandera: "portugal.webp",
        capital: "Lisboa",
        continente: "Europa"
    },
    {
        pais: "Bielorrusia",
        bandera: "bielorrusia.webp",
        capital: "Minsk",
        continente: "Europa"
    },
    {
        pais: "Kazajistán",
        bandera: "kazajistan.webp",
        capital: "Nur-Sultán",
        continente: "Asia"
    },
    {
        pais: "Uzbekistán",
        bandera: "uzbekistan.webp",
        capital: "Taskent",
        continente: "Asia"
    },
    {
        pais: "Turkmenistán",
        bandera: "turkmenistan.webp",
        capital: "Asjabad",
        continente: "Asia"
    },
    {
        pais: "Tayikistán",
        bandera: "tayikistan.webp",
        capital: "Dusambé",
        continente: "Asia"
    },
    {
        pais: "Kirguistán",
        bandera: "kirguistan.webp",
        capital: "Biskek",
        continente: "Asia"
    },
    {
        pais: "Tailandia",
        bandera: "tailandia.webp",
        capital: "Bangkok",
        continente: "Asia"
    },
    {
        pais: "Malasia",
        bandera: "malasia.webp",
        capital: "Kuala Lumpur",
        continente: "Asia"
    },
    {
        pais: "Singapur",
        bandera: "singapur.webp",
        capital: "Singapur",
        continente: "Asia"
    },
    {
        pais: "Indonesia",
        bandera: "indonesia.webp",
        capital: "Yakarta",
        continente: "Asia"
    },
    {
        pais: "Filipinas",
        bandera: "filipinas.webp",
        capital: "Manila",
        continente: "Asia"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Fiyi",
        bandera: "fiyi.webp",
        capital: "Suva",


        continente: "Oceanía"
    },
    {
        pais: "Samoa",
        bandera: "samoa.webp",
        capital: "Apia",
        continente: "Oceanía"
    },
    {
        pais: "Tonga",
        bandera: "tonga.webp",
        capital: "Nukualofa",
        continente: "Oceanía"
    },
    {
        pais: "Vanuatu",
        bandera: "vanuatu.webp",
        capital: "Port Vila",
        continente: "Oceanía"
    },
    {
        pais: "Kiribati",
        bandera: "kiribati.webp",
        capital: "Tarawa",
        continente: "Oceanía"
    },
    {
        pais: "Micronesia",
        bandera: "micronesia.webp",
        capital: "Palikir",
        continente: "Oceanía"
    },
    {
        pais: "Papúa Nueva Guinea",
        bandera: "papuanuevaguinea.webp",
        capital: "Puerto Moresby",
        continente: "Oceanía"
    },
    {
        pais: "Islas Salomón",
        bandera: "islassalomon.webp",
        capital: "Honiara",
        continente: "Oceanía"
    },
    {
        pais: "Timor Oriental",
        bandera: "timororiental.webp",
        capital: "Dili",
        continente: "Asia"
    },
    {
        pais: "Austria",
        bandera: "austria.webp",
        capital: "Viena",
        continente: "Europa"
    },
    {
        pais: "Bélgica",
        bandera: "belgica.webp",
        capital: "Bruselas",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Dinamarca",
        bandera: "dinamarca.webp",
        capital: "Copenhague",
        continente: "Europa"
    },
    {
        pais: "Grecia",
        bandera: "grecia.webp",
        capital: "Atenas",
        continente: "Europa"
    },
    {
        pais: "Holanda",
        bandera: "holanda.webp",
        capital: "Ámsterdam",
        continente: "Europa"
    },
    {
        pais: "Hungría",
        bandera: "hungria.webp",
        capital: "Budapest",
        continente: "Europa"
    },
    {
        pais: "Irlanda",
        bandera: "irlanda.webp",
        capital: "Dublín",
        continente: "Europa"
    },
    {
        pais: "Polonia",
        bandera: "polonia.webp",
        capital: "Varsovia",
        continente: "Europa"
    },
    {
        pais: "Rumania",
        bandera: "rumania.webp",
        capital: "Bucarest",
        continente: "Europa"
    },
    {
        pais: "Suecia",
        bandera: "suecia.webp",
        capital: "Estocolmo",
        continente: "Europa"
    },
    {
        pais: "Ucrania",
        bandera: "ucrania.webp",
        capital: "Kiev",
        continente: "Europa"
    },
    {
        pais: "Finlandia",
        bandera: "finlandia.webp",
        capital: "Helsinki",
        continente: "Europa"
    },
    {
        pais: "Noruega",
        bandera: "noruega.webp",
        capital: "Oslo",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",
        continente: "Europa"
    },
    {
        pais: "Bulgaria",
        bandera: "bulgaria.webp",
        capital: "Sofía",
        continente: "Europa"
    },
    {
        pais: "Suiza",
        bandera: "suiza.webp",
        capital: "Berna",
        continente: "Europa"
    },
    {
        pais: "Chipre",
        bandera: "chipre.webp",
        capital: "Nicosia",
        continente: "Europa"
    },
    {
        pais: "Estonia",
        bandera: "estonia.webp",
        capital: "Tallin",
        continente: "Europa"
    },
    {
        pais: "Letonia",
        bandera: "letonia.webp",
        capital: "Riga",
        continente: "Europa"
    },
    {
        pais: "Lituania",
        bandera: "lituania.webp",
        capital: "Vilna",
        continente: "Europa"
    },
    {
        pais: "Moldavia",
        bandera: "moldavia.webp",
        capital: "Chisináu",
        continente: "Europa"
    },
    {
        pais: "Serbia",
        bandera: "serbia.webp",
        capital: "Belgrado",
        continente: "Europa"
    },
    {
        pais: "Albania",
        bandera: "albania.webp",
        capital: "Tirana",
        continente: "Europa"
    },
    {
        pais: "Bosnia y Herzegovina",
        bandera: "bosniaherzegovina.webp",
        capital: "Sarajevo",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Macedonia del Norte",
        bandera: "macedoniadelnorte.webp",
        capital: "Skopje",
        continente: "Europa"
    },
    {
        pais: "Alemania",
        bandera: "alemania.webp",
        capital: "Berlín",
        continente: "Europa"
    },
    {
        pais: "Italia",
        bandera: "italia.webp",
        capital: "Roma",
        continente: "Europa"
    },
    {
        pais: "Francia",
        bandera: "francia.webp",
        capital: "París",
        continente: "Europa"
    },
    {
        pais: "Reino Unido",


        bandera: "reinounido.webp",
        capital: "Londres",
        continente: "Europa"
    },
    {
        pais: "España",
        bandera: "espana.webp",
        capital: "Madrid",
        continente: "Europa"
    },
    {
        pais: "Portugal",
        bandera: "portugal.webp",
        capital: "Lisboa",
        continente: "Europa"
    },
    {
        pais: "Bielorrusia",
        bandera: "bielorrusia.webp",
        capital: "Minsk",
        continente: "Europa"
    },
    {
        pais: "Kazajistán",
        bandera: "kazajistan.webp",
        capital: "Nur-Sultán",
        continente: "Asia"
    },
    {
        pais: "Uzbekistán",
        bandera: "uzbekistan.webp",
        capital: "Taskent",
        continente: "Asia"
    },
    {
        pais: "Turkmenistán",
        bandera: "turkmenistan.webp",
        capital: "Asjabad",
        continente: "Asia"
    },
    {
        pais: "Tayikistán",
        bandera: "tayikistan.webp",
        capital: "Dusambé",
        continente: "Asia"
    },
    {
        pais: "Kirguistán",
        bandera: "kirguistan.webp",
        capital: "Biskek",
        continente: "Asia"
    },
    {
        pais: "Tailandia",
        bandera: "tailandia.webp",
        capital: "Bangkok",
        continente: "Asia"
    },
    {
        pais: "Malasia",
        bandera: "malasia.webp",
        capital: "Kuala Lumpur",
        continente: "Asia"
    },
    {
        pais: "Singapur",
        bandera: "singapur.webp",
        capital: "Singapur",
        continente: "Asia"
    },
    {
        pais: "Indonesia",
        bandera: "indonesia.webp",
        capital: "Yakarta",
        continente: "Asia"
    },
    {
        pais: "Filipinas",
        bandera: "filipinas.webp",
        capital: "Manila",
        continente: "Asia"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Fiyi",
        bandera: "fiyi.webp",
        capital: "Suva",
        continente: "Oceanía"
    },
    {
        pais: "Samoa",
        bandera: "samoa.webp",
        capital: "Apia",
        continente: "Oceanía"
    },
    {
        pais: "Tonga",
        bandera: "tonga.webp",
        capital: "Nukualofa",
        continente: "Oceanía"
    },
    {
        pais: "Vanuatu",
        bandera: "vanuatu.webp",
        capital: "Port Vila",
        continente: "Oceanía"
    },
    {
        pais: "Kiribati",


        bandera: "kiribati.webp",
        capital: "Tarawa",
        continente: "Oceanía"
    },
    {
        pais: "Micronesia",
        bandera: "micronesia.webp",
        capital: "Palikir",
        continente: "Oceanía"
    },
    {
        pais: "Papúa Nueva Guinea",
        bandera: "papuanuevaguinea.webp",
        capital: "Puerto Moresby",
        continente: "Oceanía"
    },
    {
        pais: "Islas Salomón",
        bandera: "islassalomon.webp",
        capital: "Honiara",
        continente: "Oceanía"
    },
    {
        pais: "Timor Oriental",
        bandera: "timororiental.webp",
        capital: "Dili",
        continente: "Asia"
    },
    {
        pais: "Austria",
        bandera: "austria.webp",
        capital: "Viena",
        continente: "Europa"
    },
    {
        pais: "Bélgica",
        bandera: "belgica.webp",
        capital: "Bruselas",
        continente: "Europa"
    },
    {
        pais: "Dinamarca",
        bandera: "dinamarca.webp",
        capital: "Copenhague",
        continente: "Europa"
    },
    {
        pais: "Grecia",
        bandera: "grecia.webp",
        capital: "Atenas",
        continente: "Europa"
    },
    {
        pais: "Holanda",
        bandera: "holanda.webp",
        capital: "Ámsterdam",
        continente: "Europa"
    },
    {
        pais: "Hungría",
        bandera: "hungria.webp",
        capital: "Budapest",
        continente: "Europa"
    },
    {
        pais: "Irlanda",
        bandera: "irlanda.webp",
        capital: "Dublín",
        continente: "Europa"
    },
    {
        pais: "Polonia",
        bandera: "polonia.webp",
        capital: "Varsovia",
        continente: "Europa"
    },
    {
        pais: "Rumania",
        bandera: "rumania.webp",
        capital: "Bucarest",
        continente: "Europa"
    },
    {
        pais: "Suecia",
        bandera: "suecia.webp",
        capital: "Estocolmo",
        continente: "Europa"
    },
    {
        pais: "Ucrania",
        bandera: "ucrania.webp",
        capital: "Kiev",
        continente: "Europa"
    },
    {
        pais: "Finlandia",
        bandera: "finlandia.webp",
        capital: "Helsinki",
        continente: "Europa"
    },
    {
        pais: "Noruega",
        bandera: "noruega.webp",
        capital: "Oslo",
        continente: "Europa"
    },
    {
        pais: "Eslovenia",
        bandera: "eslovenia.webp",
        capital: "Liubliana",
        continente: "Europa"
    },
    {
        pais: "Eslovaquia",
        bandera: "eslovaquia.webp",
        capital: "Bratislava",


        continente: "Europa"
    },
    {
        pais: "Bulgaria",
        bandera: "bulgaria.webp",
        capital: "Sofía",
        continente: "Europa"
    },
    {
        pais: "Suiza",
        bandera: "suiza.webp",
        capital: "Berna",
        continente: "Europa"
    },
    {
        pais: "Chipre",
        bandera: "chipre.webp",
        capital: "Nicosia",
        continente: "Europa"
    },
    {
        pais: "Estonia",
        bandera: "estonia.webp",
        capital: "Tallin",
        continente: "Europa"
    },
    {
        pais: "Letonia",
        bandera: "letonia.webp",
        capital: "Riga",
        continente: "Europa"
    },
    {
        pais: "Lituania",
        bandera: "lituania.webp",
        capital: "Vilna",
        continente: "Europa"
    },
    {
        pais: "Moldavia",
        bandera: "moldavia.webp",
        capital: "Chisináu",
        continente: "Europa"
    },
    {
        pais: "Serbia",
        bandera: "serbia.webp",
        capital: "Belgrado",
        continente: "Europa"
    },
    {
        pais: "Albania",
        bandera: "albania.webp",
        capital: "Tirana",
        continente: "Europa"
    },
    {
        pais: "Bosnia y Herzegovina",
        bandera: "bosniaherzegovina.webp",
        capital: "Sarajevo",
        continente: "Europa"
    },
    {
        pais: "Croacia",
        bandera: "croacia.webp",
        capital: "Zagreb",
        continente: "Europa"
    },
    {
        pais: "Macedonia del Norte",
        bandera: "macedoniadelnorte.webp",
        capital: "Skopje",
        continente: "Europa"
    },
    {
        pais: "Alemania",
        bandera: "alemania.webp",
        capital: "Berlín",
        continente: "Europa"
    },
    {
        pais: "Italia",
        bandera: "italia.webp",
        capital: "Roma",
        continente: "Europa"
    },
    {
        pais: "Francia",
        bandera: "francia.webp",
        capital: "París",
        continente: "Europa"
    },
    {
        pais: "Reino Unido",
        bandera: "reinounido.webp",
        capital: "Londres",
        continente: "Europa"
    },
    {
        pais: "España",
        bandera: "espana.webp",
        capital: "Madrid",
        continente: "Europa"
    },
    {
        pais: "Portugal",
        bandera: "portugal.webp",
        capital: "Lisboa",
        continente: "Europa"
    },
    {
        pais: "Bielorrusia",
        bandera: "bielorrusia.webp",
        capital: "Minsk",
        continente: "Europa"
    },
    {
        pais: "Kazajistán",
        bandera: "kazajistan.webp",


        capital: "Nur-Sultán",
        continente: "Asia"
    },
    {
        pais: "Uzbekistán",
        bandera: "uzbekistan.webp",
        capital: "Taskent",
        continente: "Asia"
    },
    {
        pais: "Turkmenistán",
        bandera: "turkmenistan.webp",
        capital: "Asjabad",
        continente: "Asia"
    },
    {
        pais: "Tayikistán",
        bandera: "tayikistan.webp",
        capital: "Dusambé",
        continente: "Asia"
    },
    {
        pais: "Kirguistán",
        bandera: "kirguistan.webp",
        capital: "Biskek",
        continente: "Asia"
    },
    {
        pais: "Tailandia",
        bandera: "tailandia.webp",
        capital: "Bangkok",
        continente: "Asia"
    },
    {
        pais: "Malasia",
        bandera: "malasia.webp",
        capital: "Kuala Lumpur",
        continente: "Asia"
    },
    {
        pais: "Singapur",
        bandera: "singapur.webp",
        capital: "Singapur",
        continente: "Asia"
    },
    {
        pais: "Indonesia",
        bandera: "indonesia.webp",
        capital: "Yakarta",
        continente: "Asia"
    },
    {
        pais: "Filipinas",
        bandera: "filipinas.webp",
        capital: "Manila",
        continente: "Asia"
    },
    {
        pais: "Australia",
        bandera: "australia.webp",
        capital: "Canberra",
        continente: "Oceanía"
    },
    {
        pais: "Nueva Zelanda",
        bandera: "nuevazelanda.webp",
        capital: "Wellington",
        continente: "Oceanía"
    },
    {
        pais: "Fiyi",
        bandera: "fiyi.webp",
        capital: "Suva",
        continente: "Oceanía"
    },
    {
        pais: "Samoa",
        bandera: "samoa.webp",
        capital: "Apia",
        continente: "Oceanía"
    },
    {
        pais: "Tonga",
        bandera: "tonga.webp",
        capital: "Nukualofa",
        continente: "Oceanía"
    },
    {
        pais: "Vanuatu",
        bandera: "vanuatu.webp",
        capital: "Port Vila",
        continente: "Oceanía"
    },
    {
        pais: "Kiribati",
        bandera: "kiribati.webp",
        capital: "Tarawa",
        continente: "Oceanía"
    },
    {
        pais: "Micronesia",
        bandera: "micronesia.webp",
        capital: "Palikir",
        continente: "Oceanía"
    },
    {
        pais: "Papúa Nueva Guinea",
        bandera: "papuanuevaguinea.webp",
        capital: "Puerto Moresby",
        continente: "Oceanía"
    },
    {
        pais: "Islas Salomón",
        bandera: "islassalomon.webp",
        capital: "Honiara",
        continente: "Oceanía"
    },
    {
        pais: "Timor Oriental",
        bandera: "timororiental.webp",
        capital: "Dili",
        continente: "Asia"
    }
];
