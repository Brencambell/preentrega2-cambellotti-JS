// Creamos los objetos para cada personaje
const personaje1 = {
    nombre: 'Knight',
    arma: 'Aguijón',
    amuleto: 'Corazón del vacío',
    hechizo: 'Garra de Mantis',
    habilidad: 'Gran corte'
  };
  
const personaje2 = {
    nombre: 'Hornet',
    arma: 'Aguja',
    amuleto: 'Capa de la Cazadora',
    hechizo: 'Aguja Onírica',
    habilidad: 'Vínculo'
  };
  
const personaje3 = {
    nombre: 'Cornifer',
    arma: 'Bastón',
    amuleto: 'Brújula caprichosa',
    hechizo: 'Sentido del Mundo',
    habilidad: 'Concentración'
  };
  
const personaje4 = {
    nombre: 'Iselda',
    arma: 'Pluma',
    amuleto: 'Capa Sombría',
    hechizo: 'Ascensión',
    habilidad: 'Vuelo Desolador'
  };
  
// Creamos un array que almacena los personajes
const personajes = [personaje1, personaje2, personaje3, personaje4];

// Creamos una función para mostrar los detalles de cada personaje
function mostrarDetalles(personaje) {
    console.log('Nombre: ' + personaje.nombre);
    console.log('Arma: ' + personaje.arma);
    console.log('Amuleto: ' + personaje.amuleto);
    console.log('Hechizo: ' + personaje.hechizo);
    console.log('Habilidad: ' + personaje.habilidad);
};

let listxRespuesta = prompt("¡Bienvenidx a Hollow Knight! Próximamente estaremos lanzando nuestro videojuego. Mientras tanto, te ofrecemos un demo para que puedas conocer más a los personajes. ¿Estás listx? s/n")

if (listxRespuesta === "s") {
    listxSi = true;
    for (let i = 0; i < personajes.length; i+=1) {
        mostrarDetalles(personajes[i]);
      }     
} else if (listxRespuesta === "n") {
  alert("¡Que pena! Cuando estés listx, refresca la página y aquí estaremos.");
} else if (listxRespuesta === null) {
} else {
  alert("Respuesta inválida. Por favor, refresca la página y responde con s o n.");
};

if (listxSi) {
    let nombrePersonaje = prompt("Mira la consola y verás el nombre e información de 4 personajes. Selecciona uno e ingresa el nombre aquí:"); 
    let nuevoPersonaje = personajes.find(personaje => personaje.nombre.toLowerCase() === nombrePersonaje.toLowerCase());
    alert("¡Ahora vamos a tirar los dados para elegir la vida, fuerza y defensa de " + nombrePersonaje + ". Dale click a aceptar y mira los resultados en consola");
let vida, fuerza, defensa;
let confirmar = false;
while (!confirmar) {
  vida = Math.floor(Math.random() * 91) + 10;
  fuerza = Math.floor(Math.random() * 91) + 10;
  defensa = Math.floor(Math.random() * 91) + 10;
  console.log('Vida: ' + vida);
  console.log('Fuerza: ' + fuerza);
  console.log('Defensa: ' + defensa);
  confirmar = confirm("¿Estás satisfecho con los valores generados?. Si quieres quedarte con estos valores, haz click en aceptar; sino, dale a cancelar y volveras a tirar los dados.");
}
nuevoPersonaje.vida = vida;
nuevoPersonaje.fuerza = fuerza;
nuevoPersonaje.defensa = defensa;
console.log("¡Felicitaciones, haz creado tu personaje!");

let nuevoArray = [nuevoPersonaje].map(personaje => {
  return {
    nombre: personaje.nombre,
    arma: personaje.arma,
    amuleto: personaje.amuleto,
    hechizo: personaje.hechizo,
    habilidad: personaje.habilidad,
    vida: personaje.vida,
    fuerza: personaje.fuerza,
    defensa: personaje.defensa
  }
});

console.table(nuevoArray);
};

