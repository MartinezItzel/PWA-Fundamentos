fetch('superman.png') //asi se coloca porque esta en la raiz
                        //de lo contrario se debe especificar la ruta

    .then(response => response.blob() )
    .then( imagen =>{

    

        console.log(imagen);

    });