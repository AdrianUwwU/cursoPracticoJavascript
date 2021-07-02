/* media aritmetica (promedio) */
const lista1 = [
    100,
    200,
    300,
    500
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}
const listaPromedio = sumaLista1 / lista1.length;

// en funcion

function calculateAverageFor(list) {
    let sumaList = 0;
    for (let i = 0; i < list.length; i++) {
        sumaList = sumaList + list[i];
    }
    const listAverage = sumaList / list.length;
    return listAverage;
}

function calculateAverageReduce(list) {
    const sumaList = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
        return (valorAcumulado + nuevoElemento);
    });
    const listAverage = sumaList / list.length;
    return listAverage;
}