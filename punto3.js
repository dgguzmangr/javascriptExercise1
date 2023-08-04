/*
Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando los datos de forma ascendente.

1. Creo un array que contendrá dos arrays.
2. Creo una función que creará dos arrays de 5 posiciones dento del array que creé en el punto 1. El usuario podrá ingresar los números para esta tareacon la condición que los números sean enteros. La función tomará como parámetro el número de arrays que se deseen crear.
3. Creo un ciclo for que recorre el array principal, el contendrá las los otros arrays.
4. Con un while hago que se repita un ciclo 5 veces.
5. Dentro de ese ciclo while, se le pide un número, ese número se verifica que sea entero y se agrega a un array. Si hay un error de ingreso se le presenta un mensaje de error y se pide de nuevo el número. A medida que se van insertando los números se van mostrando por pantalla. A finalizar el primer array se muestra el array y se continúa con el segundo y cuantos se deseen crear.
6. Creo otra función que concatene los array adentro del array principal y ordeno los números de menor a mayor.
7 Llamo la primera función y la almaceno en una variable.
8. Llamo la segunda función con parámetro la variable que acabo de crear.
*/


let listas = [];

function crearArray(numListas) {

    for (let i = 0; i < numListas; i++) {
        let lista = [];
        while (lista.length < 5) {
            try {
                let input = prompt("Ingresa un número entero: ");
                let num = parseInt(input);
                if (!isNaN(num)) {
                    lista.push(num);
                } else {
                    console.log("Debes ingresar un número entero.");
                }
                console.log("Los números registrados hasta el momento son: " + lista);
            } catch (error) {
                console.log("Ocurrió un error: " + error);
            }
        }
        console.log("Los números ingresados para la lista " + (i + 1) + " son: " + lista);
        listas.push(lista);
    }
    return listas;
}


function compararArrays (listas) {
    let listaComparada = [].concat(...listas);
    listaComparada.sort(function(a, b){return a - b});
    return listaComparada
}

let resultado = crearArray(2);
console.log(compararArrays(resultado));
