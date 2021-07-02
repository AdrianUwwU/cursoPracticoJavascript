
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    100,
    200,
    300,
    500,
    400000000,
  ];
  
  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  } 

 
// en función //////////////////////////////////////////////////////////


function calcularMediana(list) {

  const listaOrdenada = list.sort((a,b) => a - b);

  const mitadLista = parseInt(listaOrdenada.length / 2);

  let medianus;

  if (isPar(listaOrdenada.length)) {
    const firstE = listaOrdenada[mitadLista - 1];
    const secondE = listaOrdenada[mitadLista];

    const promedioLista = calcularPromedio([
      firstE,
      secondE
    ]);
    medianus = promedioLista;
    return medianus;
  } else {
    medianus = listaOrdenada[mitadLista];
    return medianus;
  }

  function isPar(Liste) {
    if (Liste % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function calcularPromedio(listilla) {
    const sumaDeLista = listilla.reduce(
      function (valorAcumulad0 = 0, nuevoElement) {
        return valorAcumulad0 + nuevoElement;
      }
    );
    const promedioListilla = sumaDeLista / listilla.length;
    return promedioListilla;
  }
}


calcularMediana([100,200,300,500]);





