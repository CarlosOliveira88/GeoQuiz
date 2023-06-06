var continentes = [
    {
        nombre: "África",
        paises: ["Angola", "Argelia", "Benín", "Botsuana", "Burkina Faso", "Burundi", "Cabo Verde", "Camerún", "Chad", "Comoras", "Congo", "Costa de Marfil", "Djibouti", "Egipto", "Eritrea", "Esuatini", "Etiopía", "Gabón", "Gambia", "Ghana", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Kenia", "Lesoto", "Liberia", "Libia", "Madagascar", "Malaui", "Malí", "Marruecos", "Mauricio", "Mauritania", "Mozambique", "Namibia", "Níger", "Nigeria", "República Centroafricana", "República Democrática del Congo", "Ruanda", "Santo Tomé y Príncipe", "Senegal", "Seychelles", "Sierra Leona", "Somalia", "Sudáfrica", "Sudán", "Sudán del Sur", "Tanzania", "Togo", "Túnez", "Uganda", "Yibuti", "Zambia", "Zimbabue"]
    },
    {
        nombre: "América",
        paises: ["Antigua y Barbuda", "Argentina", "Bahamas", "Barbados", "Belice", "Bolivia", "Brasil", "Canadá", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", "Ecuador", "El Salvador", "Estados Unidos", "Granada", "Guatemala", "Guyana", "Haití", "Honduras", "Jamaica", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana", "San Cristóbal y Nieves", "San Vicente y las Granadinas", "Santa Lucía", "Surinam", "Trinidad y Tobago", "Uruguay", "Venezuela"]
    },
    {
        nombre: "Asia",
        paises: ["Afganistán", "Arabia Saudita", "Bangladés", "Baréin", "Birmania", "Brunéi", "Bután", "Camboya", "Catar", "China", "Corea del Norte", "Corea del Sur", "Emiratos Árabes Unidos", "Filipinas", "India", "Indonesia", "Irak", "Irán", "Israel", "Japón", "Jordania", "Kazajistán", "Kirguistán", "Kuwait", "Laos", "Líbano", "Malasia", "Maldivas", "Mongolia", "Nepal", "Omán", "Pakistán", "Palaos", "Papúa Nueva Guinea", "Filipinas", "Qatar", "Rusia", "Singapur", "Siria", "Sri Lanka", "Tailandia", "Tayikistán", "Timor Oriental", "Turkmenistán", "Turquía", "Uzbekistán"
        ]
    }]

var europa = [
    {
        nombre: "Albania",
        bandera: "al.png",
        capital: "Tirana"
    },
    {
        nombre: "Alemania",
        bandera: "de.png",
        capital: "Berlín"
    },
    {
        nombre: "Andorra",
        bandera: "ad.png",
        capital: "Andorra la Vella"
    },
    {
        nombre: "Armenia",
        bandera: "am.png",
        capital: "Ereván"
    },
    {
        nombre: "Austria",
        bandera: "at.png",
        capital: "Viena"
    },
    {
        nombre: "Azerbaiyán",
        bandera: "az.png",
        capital: "Bakú"
    },
    {
        nombre: "Bélgica",
        bandera: "be.png",
        capital: "Bruselas"
    },
    {
        nombre: "Bielorrusia",
        bandera: "by.png",
        capital: "Minsk"
    },
    {
        nombre: "Bosnia y Herzegovina",
        bandera: "ba.png",
        capital: "Sarajevo"
    },
    {
        nombre: "Bulgaria",
        bandera: "bg.png",
        capital: "Sofía"
    },
    {
        nombre: "Chipre",
        bandera: "cy.png",
        capital: "Nicosia"
    },
    {
        nombre: "Croacia",
        bandera: "hr.png",
        capital: "Zagreb"
    },
    {
        nombre: "Dinamarca",
        bandera: "dk.png",
        capital: "Copenhague"
    },
    {
        nombre: "Eslovaquia",
        bandera: "sk.png",
        capital: "Bratislava"
    },
    {
        nombre: "Eslovenia",
        bandera: "si.png",
        capital: "Liubliana"
    },
    {
        nombre: "España",
        bandera: "es.png",
        capital: "Madrid"
    },
    {
        nombre: "Estonia",
        bandera: "ee.png",
        capital: "Tallin"
    },
    {
        nombre: "Finlandia",
        bandera: "fi.png",
        capital: "Helsinki"
    },
    {
        nombre: "Francia",
        bandera: "fr.png",
        capital: "París"
    },
    {
        nombre: "Georgia",
        bandera: "ge.png",
        capital: "Tiflis"
    },
    {
        nombre: "Grecia",
        bandera: "gr.png",
        capital: "Atenas"
    },
    {
        nombre: "Hungría",
        bandera: "hu.png",
        capital: "Budapest"
    },
    {
        nombre: "Irlanda",
        bandera: "ie.png",
        capital: "Dublín"
    },
    {
        nombre: "Islandia",
        bandera: "is.png",
        capital: "Reikiavik"
    },
    {
        nombre: "Italia",
        bandera: "it.png",
        capital: "Roma"
    },
    {
        nombre: "Kazajistán",
        bandera: "kz.png",
        capital: "Astana"
    },
    {
        nombre: "Letonia",
        bandera: "lv.png",
        capital: "Riga"
    },
    {
        nombre: "Liechtenstein",
        bandera: "li.png",
        capital: "Vaduz"
    },
    {
        nombre: "Lituania",
        bandera: "lt.png",
        capital: "Vilna"
    },
    {
        nombre: "Luxemburgo",
        bandera: "lu.png",
        capital: "Luxemburgo"
    },
    {
        nombre: "Malta",
        bandera: "mt.png",
        capital: "La Valeta"
    },
    {
        nombre: "Moldavia",
        bandera: "md.png",
        capital: "Chisináu"
    },
    {
        nombre: "Mónaco",
        bandera: "mc.png",
        capital: "Mónaco"
    },
    {
        nombre: "Montenegro",
        bandera: "me.png",
        capital: "Podgorica"
    },
    {
        nombre: "Noruega",
        bandera: "no.png",
        capital: "Oslo"
    },
    {
        nombre: "Países Bajos",
        bandera: "nl.png",
        capital: "Ámsterdam"
    },
    {
        nombre: "Polonia",
        bandera: "pl.png",
        capital: "Varsovia"
    },
    {
        nombre: "Portugal",
        bandera: "pt.png",
        capital: "Lisboa"
    },
    {
        nombre: "Reino Unido",
        bandera: "gb.png",
        capital: "Londres"
    },
    {
        nombre: "República Checa",
        bandera: "cz.png",
        capital: "Praga"
    },
    {
        nombre: "Rumania",
        bandera: "ro.png",
        capital: "Bucarest"
    },
    {
        nombre: "Rusia",
        bandera: "ru.png",
        capital: "Moscú"
    },
    {
        nombre: "San Marino",
        bandera: "sm.png",
        capital: "San Marino"
    },
    {
        nombre: "Serbia",
        bandera: "rs.png",
        capital: "Belgrado"
    },
    {
        nombre: "Suecia",
        bandera: "se.png",
        capital: "Estocolmo"
    },
    {
        nombre: "Suiza",
        bandera: "ch.png",
        capital: "Berna"
    },
    {
        nombre: "Ucrania",
        bandera: "ua.png",
        capital: "Kiev"
    },
    {
        nombre: "Vaticano",
        bandera: "va.png",
        capital: "Ciudad del Vaticano"
    },
]
var americaLatina = [
    {
        nombre: "Argentina",
        bandera: "argentina.png",
        capital: "Buenos Aires"
    },
    {
        nombre: "Bolivia",
        bandera: "bolivia.png",
        capital: "La Paz"
    },
    {
        nombre: "Brasil",
        bandera: "brasil.png",
        capital: "Brasilia"
    },
    {
        nombre: "Chile",
        bandera: "chile.png",
        capital: "Santiago"
    },
    {
        nombre: "Colombia",
        bandera: "colombia.png",
        capital: "Bogotá"
    },
    {
        nombre: "Costa Rica",
        bandera: "costa-rica.png",
        capital: "San José"
    },
    {
        nombre: "Cuba",
        bandera: "cuba.png",
        capital: "La Habana"
    },
    {
        nombre: "Ecuador",
        bandera: "ecuador.png",
        capital: "Quito"
    },
    {
        nombre: "El Salvador",
        bandera: "el-salvador.png",
        capital: "San Salvador"
    },
    {
        nombre: "Guatemala",
        bandera: "guatemala.png",
        capital: "Ciudad de Guatemala"
    },
    {
        nombre: "Haití",
        bandera: "haiti.png",
        capital: "Puerto Príncipe"
    },
    {
        nombre: "Honduras",
        bandera: "honduras.png",
        capital: "Tegucigalpa"
    },
    {
        nombre: "Jamaica",
        bandera: "jamaica.png",
        capital: "Kingston"
    },
    {
        nombre: "México",
        bandera: "mexico.png",
        capital: "Ciudad de México"
    },
    {
        nombre: "Nicaragua",
        bandera: "nicaragua.png",
        capital: "Managua"
    },
    {
        nombre: "Panamá",
        bandera: "panama.png",
        capital: "Ciudad de Panamá"
    },
    {
        nombre: "Paraguay",
        bandera: "paraguay.png",
        capital: "Asunción"
    },
    {
        nombre: "Perú",
        bandera: "peru.png",
        capital: "Lima"
    },
    {
        nombre: "República Dominicana",
        bandera: "republica-dominicana.png",
        capital: "Santo Domingo"
    },
    {
        nombre: "Uruguay",
        bandera: "uruguay.png",
        capital: "Montevideo"
    },
    {
        nombre: "Venezuela",
        bandera: "venezuela.png",
        capital: "Caracas"
    },

    {
        nombre: "Guyana",
        bandera: "guyana.png",
        capital: "Georgetown"
    },
    {
        nombre: "Guyana Francesa",
        bandera: "guyana-francesa.png",
        capital: "Cayena"
    },
    {
        nombre: "Surinam",
        bandera: "surinam.png",
        capital: "Paramaribo"
    },
    {
        nombre: "Trinidad y Tobago",
        bandera: "trinidad-tobago.png",
        capital: "Puerto España"
    },
    {
        nombre: "Belice",
        bandera: "belice.png",
        capital: "Belmopán"
    },
    {
        nombre: "Puerto Rico",
        bandera: "puerto-rico.png",
        capital: "San Juan"
    }
];

var americaDelNorte = [
    {
        nombre: "Canadá",
        bandera: "canada.png",
        capital: "Ottawa"
    },
    {
        nombre: "Estados Unidos",
        bandera: "estadosunidos.png",
        capital: "Washington D.C."
    },
    {
        nombre: "México",
        bandera: "mexico.png",
        capital: "Ciudad de México"
    },
    {
        nombre: "Guatemala",
        bandera: "guatemala.png",
        capital: "Ciudad de Guatemala"
    },
    {
        nombre: "Belice",
        bandera: "belice.png",
        capital: "Belmopán"
    },
    {
        nombre: "Honduras",
        bandera: "honduras.png",
        capital: "Tegucigalpa"
    },
    {
        nombre: "El Salvador",
        bandera: "elsalvador.png",
        capital: "San Salvador"
    },
    {
        nombre: "Costa Rica",
        bandera: "costarica.png",
        capital: "San José"
    },
    {
        nombre: "Nicaragua",
        bandera: "nicaragua.png",
        capital: "Managua"
    },
    {
        nombre: "Panamá",
        bandera: "panama.png",
        capital: "Ciudad de Panamá"
    },
    {
        nombre: "Cuba",
        bandera: "cuba.png",
        capital: "La Habana"
    },
    {
        nombre: "Jamaica",
        bandera: "jamaica.png",
        capital: "Kingston"
    },
    {
        nombre: "Haití",
        bandera: "haiti.png",
        capital: "Puerto Príncipe"
    },
    {
        nombre: "República Dominicana",
        bandera: "republicadominicana.png",
        capital: "Santo Domingo"
    },
    {
        nombre: "Bahamas",
        bandera: "bahamas.png",
        capital: "Nasáu"
    },
    {
        nombre: "Trinidad y Tobago",
        bandera: "trinidadytobago.png",
        capital: "Puerto España"
    },
    {
        nombre: "Barbados",
        bandera: "barbados.png",
        capital: "Bridgetown"
    },
    {
        nombre: "Granada",
        bandera: "granada.png",
        capital: "Saint George's"
    },
    {
        nombre: "San Cristóbal y Nieves",
        bandera: "sancristobalynieves.png",
        capital: "Basseterre"
    },
    {
        nombre: "Santa Lucía",
        bandera: "santalucia.png",
        capital: "Castries"
    },
    {
        nombre: "Antigua y Barbuda",
        bandera: "antiguaybarbuda.png",
        capital: "Saint John's"
    },
    {
        nombre: "Dominica",
        bandera: "dominica.png",
        capital: "Roseau"
    }

];
var africa = [
    {
        nombre: "Angola",
        bandera: "angola.png",
        capital: "Luanda"
    },
    {
        nombre: "Argelia",
        bandera: "argelia.png",
        capital: "Argel"
    },
    {
        nombre: "Benín",
        bandera: "benin.png",
        capital: "Porto Novo"
    },
    {
        nombre: "Botsuana",
        bandera: "botsuana.png",
        capital: "Gaborone"
    },
    {
        nombre: "Burkina Faso",
        bandera: "burkina-faso.png",
        capital: "Uagadugú"
    },
    {
        nombre: "Camerún",
        bandera: "camerun.png",
        capital: "Yaundé"
    },
    {
        nombre: "Costa de Marfil",
        bandera: "costa-de-marfil.png",
        capital: "Yamusukro"
    },
    {
        nombre: "Egipto",
        bandera: "egipto.png",
        capital: "El Cairo"
    },
    {
        nombre: "Etiopía",
        bandera: "etiopia.png",
        capital: "Adís Abeba"
    },
    {
        nombre: "Gabón",
        bandera: "gabon.png",
        capital: "Libreville"
    },
    {
        nombre: "Gambia",
        bandera: "gambia.png",
        capital: "Banjul"
    },
    {
        nombre: "Ghana",
        bandera: "ghana.png",
        capital: "Acra"
    },
    {
        nombre: "Kenia",
        bandera: "kenia.png",
        capital: "Nairobi"
    },
    {
        nombre: "Madagascar",
        bandera: "madagascar.png",
        capital: "Antananarivo"
    },
    {
        nombre: "Malí",
        bandera: "mali.png",
        capital: "Bamako"
    },
    {
        nombre: "Marruecos",
        bandera: "marruecos.png",
        capital: "Rabat"
    },
    {
        nombre: "Nigeria",
        bandera: "nigeria.png",
        capital: "Abuja"
    },
    {
        nombre: "Ruanda",
        bandera: "ruanda.png",
        capital: "Kigali"
    },
    {
        nombre: "Senegal",
        bandera: "senegal.png",
        capital: "Dakar"
    },
    {
        nombre: "Tanzania",
        bandera: "tanzania.png",
        capital: "Dodoma"
    },
    {
        nombre: "Cabo Verde",
        bandera: "caboverde.png",
        capital: "Praia"
    },
    {
        nombre: "Chad",
        bandera: "chad.png",
        capital: "Yamena"
    },
    {
        nombre: "Comoras",
        bandera: "comoras.png",
        capital: "Moroni"
    },
    {
        nombre: "Congo",
        bandera: "congo.png",
        capital: "Brazzaville"
    },
    {
        nombre: "Costa de Marfil",
        bandera: "costademarfil.png",
        capital: "Yamusukro"
    },
    {
        nombre: "Djibouti",
        bandera: "djibouti.png",
        capital: "Djibouti"
    },
    {
        nombre: "Eritrea",
        bandera: "eritrea.png",
        capital: "Asmara"
    },
    {
        nombre: "Esuatini",
        bandera: "esuatini.png",
        capital: "Mbabane"
    },
    {
        nombre: "Guinea",
        bandera: "guinea.png",
        capital: "Conakry"
    },
    {
        nombre: "Lesoto",
        bandera: "lesoto.png",
        capital: "Maseru"
    },
    {
        nombre: "Libia",
        bandera: "libia.png",
        capital: "Trípoli"
    },
    {
        nombre: "Mauritania",
        bandera: "mauritania.png",
        capital: "Nuakchot"
    },
    {
        nombre: "Namibia",
        bandera: "namibia.png",
        capital: "Windhoek"
    },
    {
        nombre: "Níger",
        bandera: "niger.png",
        capital: "Niamey"
    },
    {
        nombre: "República Centroafricana",
        bandera: "rca.png",
        capital: "Bangui"
    },
    {
        nombre: "República Democrática del Congo",
        bandera: "rdcongo.png",
        capital: "Kinshasa"
    },
    {
        nombre: "Santo Tomé y Príncipe",
        bandera: "santotomeprincipe.png",
        capital: "Santo Tomé"
    },
    {
        nombre: "Sierra Leona",
        bandera: "sierraleona.png",
        capital: "Freetown"
    },
    {
        nombre: "Somalia",
        bandera: "somalia.png",
        capital: "Mogadiscio"
    },
    {
        nombre: "Suazilandia",
        bandera: "suazilandia.png",
        capital: "Lobamba"
    },
    {
        nombre: "Yibuti",
        bandera: "yibuti.png",
        capital: "Yibuti"
    }
];
var oceania = [
    {
        nombre: "Australia",
        bandera: "au.png",
        capital: "Canberra"
    },
    {
        nombre: "Fiyi",
        bandera: "fj.png",
        capital: "Suva"
    },
    {
        nombre: "Islas Marshall",
        bandera: "mh.png",
        capital: "Majuro"
    },
    {
        nombre: "Islas Salomón",
        bandera: "sb.png",
        capital: "Honiara"
    },
    {
        nombre: "Kiribati",
        bandera: "ki.png",
        capital: "Tarawa"
    },
    {
        nombre: "Micronesia",
        bandera: "fm.png",
        capital: "Palikir"
    },
    {
        nombre: "Nauru",
        bandera: "nr.png",
        capital: "Yaren"
    },
    {
        nombre: "Nueva Zelanda",
        bandera: "nz.png",
        capital: "Wellington"
    },
    {
        nombre: "Palaos",
        bandera: "pw.png",
        capital: "Ngerulmud"
    },
    {
        nombre: "Papúa Nueva Guinea",
        bandera: "pg.png",
        capital: "Puerto Moresby"
    },
    {
        nombre: "Samoa",
        bandera: "ws.png",
        capital: "Apia"
    },
    {
        nombre: "Tonga",
        bandera: "to.png",
        capital: "Nukualofa"
    },
    {
        nombre: "Tuvalu",
        bandera: "tv.png",
        capital: "Funafuti"
    },
    {
        nombre: "Vanuatu",
        bandera: "vu.png",
        capital: "Port Vila"
    }
];
var asia = [
    {
        nombre: "Afganistán",
        bandera: "af.png",
        capital: "Kabul"
    },
    {
        nombre: "Arabia Saudita",
        bandera: "sa.png",
        capital: "Riad"
    },
    {
        nombre: "Armenia",
        bandera: "am.png",
        capital: "Ereván"
    },
    {
        nombre: "Azerbaiyán",
        bandera: "az.png",
        capital: "Bakú"
    },
    {
        nombre: "Afganistán",
        bandera: "af.png",
        capital: "Kabul"
    },
    {
        nombre: "Arabia Saudita",
        bandera: "sa.png",
        capital: "Riad"
    },
    {
        nombre: "Armenia",
        bandera: "am.png",
        capital: "Ereván"
    },
    {
        nombre: "Azerbaiyán",
        bandera: "az.png",
        capital: "Bakú"
    },

    {
        nombre: "Bahréin",
        bandera: "bh.png",
        capital: "Manama"
    },
    {
        nombre: "Bangladés",
        bandera: "bd.png",
        capital: "Daca"
    },
    {
        nombre: "Bután",
        bandera: "bt.png",
        capital: "Timbu"
    },
    {
        nombre: "Camboya",
        bandera: "kh.png",
        capital: "Nom Pen"
    },
    {
        nombre: "China",
        bandera: "cn.png",
        capital: "Pekín"
    },
    {
        nombre: "Corea del Norte",
        bandera: "kp.png",
        capital: "Pyongyang"
    },
    {
        nombre: "Corea del Sur",
        bandera: "kr.png",
        capital: "Seúl"
    },
    {
        nombre: "Emiratos Árabes Unidos",
        bandera: "ae.png",
        capital: "Abu Dabi"
    },
    {
        nombre: "Filipinas",
        bandera: "ph.png",
        capital: "Manila"
    },
    {
        nombre: "India",
        bandera: "in.png",
        capital: "Nueva Delhi"
    },
    {
        nombre: "Indonesia",
        bandera: "id.png",
        capital: "Yakarta"
    },
    {
        nombre: "Irak",
        bandera: "iq.png",
        capital: "Bagdad"
    },
    {
        nombre: "Irán",
        bandera: "ir.png",
        capital: "Teherán"
    },
    {
        nombre: "Israel",
        bandera: "il.png",
        capital: "Jerusalén"
    },
    {
        nombre: "Japón",
        bandera: "jp.png",
        capital: "Tokio"
    },
    {
        nombre: "Kazajistán",
        bandera: "kz.png",
        capital: "Nur-Sultán"
    },
    {
        nombre: "Kirguistán",
        bandera: "kg.png",
        capital: "Biskek"
    },
    {
        nombre: "Kuwait",
        bandera: "kw.png",
        capital: "Kuwait"
    },
    {
        nombre: "Laos",
        bandera: "la.png",
        capital: "Vientián"
    },
    {
        nombre: "Líbano",
        bandera: "lb.png",
        capital: "Beirut"
    },
    {
        nombre: "Malasia",
        bandera: "my.png",
        capital: "Kuala Lumpur"
    },
    {
        nombre: "Maldivas",
        bandera: "mv.png",
        capital: "Malé"
    },
    {
        nombre: "Mongolia",
        bandera: "mn.png",
        capital: "Ulán Bator"
    },
    {
        nombre: "Myanmar",
        bandera: "mm.png",
        capital: "Naipyidó"
    },
    {
        nombre: "Nepal",
        bandera: "np.png",
        capital: "Katmandú"
    },
    {
        nombre: "Omán",
        bandera: "om.png",
        capital: "Mascate"
    },
    {
        nombre: "Pakistán",
        bandera: "pk.png",
        capital: "Islamabad"
    },
    {
        nombre: "Singapur",
        bandera: "sg.png",
        capital: "Singapur"
    },
    {
        nombre: "Sri Lanka",
        bandera: "lk.png",
        capital: "Sri Jayawardenepura Kotte"
    },
    {
        nombre: "Siria",
        bandera: "sy.png",
        capital: "Damasco"
    },
    {
        nombre: "Tailandia",
        bandera: "th.png",
        capital: "Bangkok"
    },
    {
        nombre: "Taiwán",
        bandera: "tw.png",
        capital: "Taipéi"
    },
    {
        nombre: "Tayikistán",
        bandera: "tj.png",
        capital: "Dusambé"
    },
    {
        nombre: "Turkmenistán",
        bandera: "tm.png",
        capital: "Asjabad"
    },
    {
        nombre: "Turquía",
        bandera: "tr.png",
        capital: "Ankara"
    },
    {
        nombre: "Uzbekistán",
        bandera: "uz.png",
        capital: "Taskent"
    },
    {
        nombre: "Vietnam",
        bandera: "vn.png",
        capital: "Hanói"
    },
    {
        nombre: "Jordania",
        bandera: "jo.png",
        capital: "Amán"
    },
    {
        nombre: "Yemen",
        bandera: "ye.png",
        capital: "Saná"
    }
];

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


console.log(continentes[0].paises.length + continentes[1].paises.length + continentes[2].paises.length)

console.log("asia " + asia.length)
console.log("europa " + europa.length)
console.log("america latina " + americaLatina.length)
console.log("america del norte " + americaDelNorte.length)
console.log("africa " + africa.length)
console.log("oceania " + oceania.length)


// asia tem 47 e deveria ter 51
// europa tem 48 e deveria ter 50
// america latina tem 27 e deveria ter 33
// america del norte tem 22 e deveria ter 23    a america deberia ter 50 paises en total
// africa tem 41 e deveria ter 54
// oceania tem 14 e deveria ter 14
