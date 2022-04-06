function calcularMediaAritmetica(lista){
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++){
//         sumaLista = sumaLista + lista[i];
// }

//el metodo reduce nos permite ir sumando cada uno de los elementos de una lista
//podriamos dividirlos, restarlos, etc
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);
//esto va a cumplir la misma funcion que el for de arriba
//toma el valor acumulado y le suma el nuevo valor, y asi sucesivamente

const promedioLista = sumaLista / lista.length;

return promedioLista;
}