/*fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.clone().json().then( usuario =>{
            console.log(usuario.data);
        });

        resp.json().then( usuario =>{
               console.log(usuario.data);
        });
    });*/

    //ACTIVIDAD 4
    fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.clone().clone().clone().clone().json().then( usuario =>{
            console.log(usuario.data);
        });

        resp.clone().clone().clone().json().then( usuario =>{
               console.log(usuario.data);
        });
        resp.clone().clone().json().then( usuario =>{
            console.log(usuario.data);
        });
        resp.clone().json().then( usuario =>{
            console.log(usuario.data);
        });
        resp.json().then( usuario =>{
            console.log(usuario.data);
        });
    });