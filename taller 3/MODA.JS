
const Lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const Lista2 = [
    1,
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5
];

function calcularModa(Lista) {
    
    const count = {};

    Lista.map(
        function (elemento) {
            if (count[elemento]) {
                count[elemento] += 1;
            } else {
                count[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(count).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1]
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
}

