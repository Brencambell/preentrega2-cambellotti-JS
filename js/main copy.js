let listxRespuesta = prompt("Bienvenido a Hollow Knight! Próximamente estaremos lanzando nuestro videojuego. Mientras tanto, te ofrecemos un demo para que puedas conocer más de qué se trata. ¿Estás listo? s/n");

if (listxRespuesta === "s") {
  // Continuar con otra cosa
} else if (listxRespuesta === "n") {
  alert("¡Que pena! Cuando estés listx, refresca la página y aquí estaremos.");
} else {
  alert("Respuesta inválida. Por favor, refresca la página y responde con s o n.");
}

// Creamos los objetos para cada personaje
const personaje1 = {
    nombre: 'The Knight',
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
  
  // Creamos un array para almacenar los personajes
  const personajes = [personaje1, personaje2, personaje3, personaje4];

  // Creamos una función para mostrar los detalles de cada personaje
  function mostrarDetalles(personaje) {
    console.log('Nombre: ' + personaje.nombre);
    console.log('Arma: ' + personaje.arma);
    console.log('Amuleto: ' + personaje.amuleto);
    console.log('Hechizo: ' + personaje.hechizo);
    console.log('Habilidad: ' + personaje.habilidad);
  }
  
  
  // Creamos una función para obtener los stats del personaje elegido al azar
  function obtenerStats(personaje) {
    const vida = Math.floor(Math.random() * 101);
    const fuerza = Math.floor(Math.random() * 101);
    const defensa = Math.floor(Math.random() * 101);
  
    return {
      vida,
      fuerza,
      defensa
    };
  }
  
  // Preguntamos al usuario qué personaje quiere elegir
  let opcion = prompt(`Elige un personaje:\n1. ${personaje1.nombre}\n2. ${personaje2.nombre}\n3. ${personaje3.nombre}\n4. ${personaje4.nombre}`);
  
  // Validamos la opción elegida por el usuario
  while (opcion < 1 || opcion > 4) {
    opcion = prompt(`Opción inválida. Elige un personaje:\n1. ${personaje1.nombre}\n2. ${personaje2.nombre}\n3. ${personaje3.nombre}\n4. ${personaje4.nombre}`);
  }
  
  // Obtenemos el personaje elegido por el usuario y mostramos sus detalles
  const personajeElegido = personajes[opcion - 1];
  console.log(`Detalles de ${personajeElegido.nombre}:`);
  mostrarDetalles(personajeElegido);
  
  // Obtenemos los stats del personaje elegido al azar y los mostramos en consola
  const stats = obtenerStats(personajeElegido);
  console.log(`Stats de ${personajeElegido.nombre}:`);
  console.log(`Vida: ${stats.vida}`);
  console.log(`Fuerza: ${stats.fuerza}`);
  console.log(`Defensa: ${stats.defensa}`);