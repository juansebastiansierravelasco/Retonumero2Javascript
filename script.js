/* inicio del reto*/
const estudiantes=[
    {id: 1 ,nombre: 'Ana', edad: 20},
    {id: 2 ,nombre: 'Juan', edad: 22},
    {id: 3 ,nombre: 'Maria', edad: 21},
]

function buscarEstudiantePorId(idBuscado) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < estudiantes.length; i++) {
      if (estudiantes[i].id === idBuscado) {
        resolve(estudiantes[i]);
        return;
      }
    }
    reject(new Error(No existe un estudiante con el ID , ${idBuscado}.));
  });
}
buscarEstudiantePorId(2)
  .then((estudiante) => {
    console.log('Búsqueda del estudiante con ID 2');
    console.log(Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad});
  })
  .catch((error) => {
    console.log(Error: ${error.message});
  });

buscarEstudiantePorId(1)
  .then((estudiante) => {
    console.log('Búsqueda del estudiante con ID 1');
    console.log(Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad});
  })
  .catch((error) => {
    console.log(Error: ${error.message});
  });