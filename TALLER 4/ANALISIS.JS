 const salariosColombia = colombia.map(
    function (personita)  {
        return personita.salary;
    }
);

const salariosOrdenados = salariosColombia.sort((a, b) => a - b);
/*
// Helpers
function esPar(num) {
    return (num % 2 === 0);
}

function calcularPromedio(list) {
    const sumaList = list.reduce((a, b) => a + b, 0);

    const promedio = sumaList / list.length;
    return promedio; 
};

// Calculadora Mediana

function calcularMediana(list) {

    const mitadLista = parseInt(list.length / 2);
    
    let mediana;

    if (esPar(list.length)) {
        const elemento1 = list[mitadLista - 1];
        const elemento2 = list[mitadLista];

        const promedioSalarios = calcularPromedio([elemento1, elemento2]);
        mediana = promedioSalarios;
        return mediana;
    } else {
        mediana = list[mitadLista]; 
        return mediana;
    }  
}

// Mediana General

const medianaGeneral = calcularMediana(salariosOrdenados);

// Mediana Top 10%

function calcularTop10(list) {
    const spliceStart = (list.length * 90) / 100;
    const spliceCount = list.length - spliceStart;
    const salariosTop10 = list.splice(spliceStart, spliceCount);
    const medianaTop10 = calcularMediana(salariosTop10);
    return medianaTop10;
}

// Mediana Top10

const medianaTop10 = calcularTop10(salariosOrdenados);

console.log([
    medianaGeneral,
    medianaTop10
]); */


// proyecto: calcular la cantidad de impuestos que cada uno debe pagar (y se le resta a los ingresos totales)**********************//


function calcularImpuestosAPagar(list) {
    const sueldoNeto = list.map(
        function (salario) {
            if (salario >= 500 && salario < 1000 ) {
                return ((salario * 85) / 100);
            } else if (salario >= 1000 && salario < 2000) {
                return ((salario * 75) / 100);
            } else if (salario >= 2000 && salario < 3000) {
                return ((salario * 70) / 100);
            } else if (salario >= 3000) {
                return ((salario * 60) / 100);
            } else {
                return salario;
            }
        });
    return sueldoNeto;
}

calcularImpuestosAPagar(salariosOrdenados);










