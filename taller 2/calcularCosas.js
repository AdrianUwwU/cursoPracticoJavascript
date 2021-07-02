
//FORMULA DE DESCUENTO

/* (precio * (100 - descuento))/100; */

//


function descuentos(precioOriginal, Descuento) {
    return (precioOriginal * (100 - Descuento))/100;
}
descuentos(100, 15);

function calcularDescuentos() {
    const input = document.getElementById("cifras");
    const precio = input.value;
    const input2 = document.getElementById("cifras2");
    const descuento = input2.value;
    const nuevoPrecio = descuentos(precio, descuento);
    const prais = document.getElementById("resultp");
    prais.innerText = (`el monto a pagar con descuento es: ${nuevoPrecio}`);
}




function calcularDescuentosCupones() {
    const input = document.getElementById("A");
    const presio = input.value;

    const input2 = document.getElementById("AA");
    const cupones = input2.value;
    if (cupones == 1) {
        const prais1 = document.getElementById("resultA");
        const xd = (presio * (100 - 10))/100;
        prais1.innerText = (`el monto a pagar con descuento es: ${xd}`);
    } else if (cupones == 2) {
        const prais1 = document.getElementById("resultA");
        const xdd = (presio * (100 - 15))/100;
        prais1.innerText = (`el monto a pagar con descuento es: ${xdd}`);
    } else if (cupones == 3) {
        const prais1 = document.getElementById("resultA");
        const xddd = (presio * (100 - 20))/100;
        prais1.innerText = (`el monto a pagar con descuento es: ${xddd}`);
    }
}