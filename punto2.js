/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar un nuevo valor.

1. Creo un vector vacío para almnacenar las edades.
2. Creo una variable cantMenores que inicia en 0.
3. Creo una variable cantMayores que inicia en 0.
4. Creo una variable cantAdultosMayores que inicia en 0.
5. Creo una variable edadMasBaja.
6. Creo una variable edadMasAlta.
7. Creo una variable edadPromedio.
8. Recorro el array on un ciclo for.
9. Dentro del ciclo for:
    a. si los valores adentro del array son menores de 18 la el contador cantMenores aumenta en 1.
    b. si los valores adentro del array son mayores o iguales a 18 y menores o iguales a 60 el contador cantMayores aumenta en 1.
    c. Si los valores adentro del array son mayores o iguales a 61 el contador cantAdultosMayores aumenta en 1.
    d. Encontrar el número menor en el array.
    e. Encontrar el número mayor en el array.
    f. Encontrar el promedio de todos los números.
10. Imprimo en consola todas las variables.

11. Crear una validación que reciba numeros entre 1 y 120 para el array. Si no se cumple debe pedir de nuevo el número.
*/

//let edades = [79, 7, 8, 9, 45, 36, 99, 78, 89, 5]
let edades = [];

while (edades.length < 10) {
  try {
    let edad = parseInt(prompt("Ingresa una edad entre 1 y 120 años:"));
    if(edad < 1 || edad > 120) {
      console.log("El número debe estar en un rango entre 1 y 120 años.");
    }
    else {
      edades.push(edad);
    }
    console.log("Las edades registradas  hasta el momento son: " + edades);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Debes ingresar un número entero válido.");
    }
  }
}

console.log("Las edades registradas son: " + edades);

let cantMenores = 0;
let cantMayores = 0;
let cantAdultosMayores = 0;
let edadMasBaja = Math.min(...edades);
let edadMasAlta = Math.max(...edades);

for(let edad of edades) {
  if(edad >=61) {
  cantAdultosMayores +=1;
  }
  else if(edad < 18) {
  cantMenores += 1;
  }
  else if(edad >= 18 || edad <=60) {
  cantMayores += 1;
  }
}

let cantMayoresEdad = cantAdultosMayores + cantMayores

console.log("Se encontraron " + cantMenores + " menores de edad")
console.log("Se encontraron "+ cantMayoresEdad + " mayores de edad")
console.log("Se encontraron " + cantAdultosMayores + " adultos mayores")
console.log("La edad más baja registrada es " + edadMasBaja + " años")
console.log("La edad más alta registrada es " + edadMasAlta + " años")