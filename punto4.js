/*
Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permite las siguientes opciones:

a. Agregar una persona con los datos que se listan anteriormente.
b. Mostrar la información personal de una persona particular por medio de su posición en el vector.
*/


class Persona {
    constructor(codigo, nombreApellido, identificacion, fechaNacimiento, email, ciudadResidencia, ciudadOrigen, preferencia1, preferencia2, preferencia3) {
        this.codigo = codigo;
        this.nombreApellido = nombreApellido;
        this.identificacion = identificacion;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.preferencia1 = preferencia1;
        this.preferencia2 = preferencia2;
        this.preferencia3 = preferencia3;
    }
}

function crearPersona() {
    let personas = [];

    while(personas.length < 6) {
        let codigo = Math.floor(Math.random() * 1000000);
        let nombreApellido = prompt("Ingrese el nombre de la persona: ");
        let identificacion = prompt("Ingrese el número de identificación: ");
        let fechaNacimiento = prompt("Ingrese la fecha de nacimiento: ");
        let email = prompt("Ingrese el email: ");
        let ciudadResidencia = prompt("Ingrese la ciudad de residencia: ");
        let ciudadOrigen = prompt("Ingrese la ciudad de origen: ");

        let preferencia1Artista = prompt("Ingrese el artista de la preferencia 1: ");
        let preferencia1Cancion = prompt("Ingrese la canción de la preferencia 1: ");
        let preferencia1 = { artista: preferencia1Artista, cancion: preferencia1Cancion };

        let preferencia2Artista = prompt("Ingrese el artista de la preferencia 2: ");
        let preferencia2Cancion = prompt("Ingrese la canción de la preferencia 2: ");
        let preferencia2 = { artista: preferencia2Artista, cancion: preferencia2Cancion };

        let preferencia3Artista = prompt("Ingrese el artista de la preferencia 3: ");
        let preferencia3Cancion = prompt("Ingrese la canción de la preferencia 3: ");
        let preferencia3 = { artista: preferencia3Artista, cancion: preferencia3Cancion };

        let persona = new Persona(
            codigo, 
            nombreApellido, 
            identificacion, 
            fechaNacimiento, 
            email, 
            ciudadResidencia, 
            ciudadOrigen, 
            preferencia1, 
            preferencia2, 
            preferencia3
            );
        console.log("Los datos registradas  son: ", persona);
        personas.push(persona);
    }

    return personas;
  }

var vectorPersonas = crearPersona();

function menuInicio(vectorPersonas) {
    console.log("Bienvenido al instrumento de medición de gustos musicales. A continuación podrá ingresar registros");
    let posicion = prompt("Si desea consultar un registro, por favor ingrese el número de registro que desea consultar (0, 1, 2, 3, 4 ó 5): ");
    posicion = parseInt(posicion);

    if (posicion >= 0 && posicion < vectorPersonas.length) {
        console.log(vectorPersonas[posicion]);
    } else {
        console.log("La posición ingresada no es válida");
    }
}

menuInicio(vectorPersonas);
