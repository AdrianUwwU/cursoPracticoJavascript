// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
perimetroTriangulo(2, 2, 3)
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML (cuadrado)

function areaCcuadrado(Value) {
    return Value * Value;
}

function perimetroCcuadrado(value) {
    return value * 4;
}


function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const Value = input.value;
    const area = areaCcuadrado(Value);
  alert(area);
}







// (triangulo)



function perimetroTtriangulo(ladoA, ladoB, Base) {
  return (ladoA + ladoB + Base);
}

function areaTtriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value1 = Number(input.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = Number(input2.value);
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = Number(input3.value);
  const perimetro = perimetroTtriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTrianguloAlto");
    const base = input.value;
    const input2 = document.getElementById("InputTrianguloAlto2");
    const altura = input2.value;
    const area = areaTtriangulo(base, altura);
    alert(area);
}






// (circulo)

function calcularDdiametro(value) {
   return value * 2;
}

function calcularDiámetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = calcularDdiametro(value);
    alert(diametro);
}


// desafio triangulo isóseles

function isoseles(ladoA, ladoB, base) {
  if (ladoA === ladoB) {
    
    const mitadBase = base / 2;
    const alturaT = Math.sqrt((ladoA*ladoA) - (mitadBase*mitadBase));
    return alturaT;
  } else {
    return console.log("No es isoseles");
  }
}
isoseles(10, 10, 13);