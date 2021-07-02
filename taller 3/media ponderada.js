const lista1 = [
    {nota:7, relevancia: 30},
    {nota:8, relevancia: 30},
    {nota:7, relevancia: 40},
];



function calcularMediaPonderada(obj) {
    const notasMasRelevancia = obj.map(function (noteObject) {
        return noteObject.nota * noteObject.relevancia;
    });
    const sumaNotasRelevancia = notasMasRelevancia.reduce((a, b) => a + b, 0);

    const sumaRRelevancia = obj.map(function (relevanciaObj) {
        return relevanciaObj.relevancia;
    });
    const sumaRelevancia = sumaRRelevancia.reduce((a, b) => a + b, 0);


    const mediaPonderada = sumaNotasRelevancia / sumaRelevancia;
    return mediaPonderada;

};

calcularMediaPonderada(lista1);