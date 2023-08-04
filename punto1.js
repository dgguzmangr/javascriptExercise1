class Figura {
    constructor(base, altura, lado1, lado2, lado3, radio, area, perimetro) {
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.radio = radio;
        this.area = area;
        this.perimetro = perimetro;
    }

    //triángulo
    areaTriangulo(base, altura) {
        var area = (base*altura)/2;
        return area;
    }

    pertimetroTriangulo(a,b,c) {
        var  perimetro = a + b + c; 
        return perimetro; 
    }

    //rectángulo
    areaRectangulo(base, altura) {
        var area = base*altura;
        return area;
    }

    perimetroRectangulo(base, altura) {
        var perimetro = 2*(base*altura);
        return perimetro;
    }

    //cuadrado

    areaCuadrado(lado1) {
        var area = lado1*lado1;
        return area;
    }

    perimetroCuadrado(lado1) {
        var perimetro = lado1*4;
        return perimetro
    }

    //círculo
    areaCirculo(radio) {
        var area = Math.PI * radio*radio;
        return area;
    }

    perimetroCirculo(radio) {
        var perimetro = 2 * Math.PI * radio * radio;
        return perimetro;
    }
}


console.log("A continuación ingrese las longitudes requeridas. Es posible ingresar números decimales o enteros")
let base = parseFloat(prompt("Por favor ingrese una longitud para una base: "));
let altura = parseFloat(prompt("Por favor ingrese una longitud para una altura: "));
let lado1 = parseFloat(prompt("Por favor ingrese una longitud para un lado: "));
let lado2 = parseFloat(prompt("Por favor ingrese una longitud para otro lado: "));
let lado3 = parseFloat(prompt("Por favor ingrese una longitud para un lado más: "));
let radio = parseFloat(prompt("Por favor ingrese una longitud para un radio: "));
console.log("Las logitudes ingresadas fueron las siguientes: " + " base: " + base + ", Altura: " + altura + ", lado 1: " + lado1 + ", lado 2: " + lado2 + ", lado 3: " + lado3 + " y radio: " + radio)



let triangulo = new Figura();
let areaTriangulo = triangulo.areaTriangulo(base, altura);
let pertimetroTriangulo = triangulo.pertimetroTriangulo(lado1, lado2, lado3);
console.log("El área del triángulo de base " + base + " y altura " + altura + " es " + areaTriangulo);
console.log("El perímetro de un triángulo de lados " + lado1 + ", " + lado2 + " y " + lado3 + " es " + pertimetroTriangulo);


let rectangulo = new Figura();
let areaRectangulo = rectangulo.areaRectangulo(base, altura);
let perimetroRectangulo = rectangulo.perimetroRectangulo(base, altura);
console.log("El área de un rectángulo de base " + base + " y altura " + altura + " es " + areaRectangulo);
console.log("El perímetro de un rectángulo de base " + base + " y altura " + altura + " es " + perimetroRectangulo);


let cuadrado = new Figura();
let areaCuadrado = cuadrado.areaCuadrado(lado1);
let perimetroCuadrado = cuadrado.perimetroCuadrado(lado1);
console.log("El área de un cuadrado de lado " + lado1 + " es " + areaCuadrado);
console.log("El perímetro de un cuadrado de lado " + lado1 + " es " + perimetroCuadrado);


let circulo = new Figura();
let areaCirculo = circulo.areaCirculo(radio);
let perimetroCirculo = circulo.perimetroCirculo(radio);
console.log("El área de círculo de radio " + radio + " es " + areaCirculo);
console.log("El perímetro de un círculo de radio " + radio + " es " + perimetroCirculo);



/*
//--------Triángulo--------//
//Área
var base = 5;
var altura = 6;
var area = (base*altura)/2;
console.log(area);

function areaTriangulo(base, altura) {
    var area = (base*altura)/2;
    return area;
}

console.log("El área del triángulo es: " + areaTriangulo(base, altura))

//Perímetro
var lado1 = 2;
var lado2 = 6;
var lado3 = 5;
var perimetro = lado1 + lado2 + lado3;
console.log(perimetro);

function pertimetroTriangulo(a,b,c) {
    var  perimetro = a + b + c; 
    return perimetro; 
}

console.log("El perimetro del triangulo es: " + pertimetroTriangulo(a, b, c));


//--------Rectángulo--------//
//Área
var base = 6;
var altura = 5;
var area = base * altura;
console.log(area)

function areaRectángulo(base, altura) {
    var area = base*altura;
    return area;
}

console.log("El área del rectángulo es: "+ areaRectángulo(base, altura))

//Perímetro
var base = 6;
var altura= 5;
var perimetro =  2*(base*altura);
console.log(perimetro)

function perimetroRectangulo(base, altura) {
    perimetro = 2*(base*altura);
    return perimetro;
}
console.log("El perímetro del rectángulo es: "+ perimetroRectangulo(base, altura))


//--------Cuadrado--------//
//Área
var lado = 6
var area = lado*lado
console.log(area)

function areaCuadrado(lado) {
    area = lado*lado;
    return area;
}

console.log("El área del cuadrado es: " + areaCuadrado(lado))

//Perímetro
var lado = 6;
var perimetro = lado*4;
console.log(perimetro)

function perimetroCuadrado(lado) {
    perimetro = lado*4;
    return perimetro
}

console.log("El área del cuadrado es: " + perimetroCuadrado(lado))


//--------Círculo--------//
//Área
var radio = 3;
var area = Math.PI * radio*radio;
console.log(area)

function areaCirculo(radio) {
    area = Math.PI * radio*radio;
    return area;
}

//Perímetro
var radio = 3;
var perimetro = 2*Math.PI*radio*radio;
console.log(perimetro)

function perimetroCirculo(radio) {
    perimetro = 2*Math.PI*radio*radio;
    return perimetro;
}

console.log("El perímetro del círculo es: " + perimetroCirculo(radio))
*/