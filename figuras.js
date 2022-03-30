//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
//console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el HTML

//Funciones cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Funciones Triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}

//Funciones Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}