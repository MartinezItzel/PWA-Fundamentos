//console.log('Hola Mundo');
/*function sumarUno(numero){
    return numero + 1;
}

console.log (sumarUno(15));*/

function sumarUno(numero, callback){

    setTimeout(function(){

        callback( numero + 1);

    }, 800); //Se ejecuta a las 800 milesimas de segundo


}

sumarUno(5, function(nuevoValor){ //resultado 6

    sumarUno(nuevoValor, function(nuevoValor2){ //resultado 7

    sumarUno(nuevoValor2, function(nuevoValor3){
        console.log(nuevoValor3); //resultado 8
    });

    });

})
