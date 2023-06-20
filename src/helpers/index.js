const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //Mientras mayor es la cantidad, menos es el interes
    if(total < 5000) {
        total = cantidad * 1.5;
    } else if(total >= 5000 && total < 10000){
        total = cantidad * 1.4;
    } else if(total >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    //Mientras mas plazo, mayor interes
    if(plazo === 6) {
        total *= 1.1;
    } else if(plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }
    return total;
}

export {
    calcularTotalPagar
}