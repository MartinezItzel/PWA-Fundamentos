/*
fetch('https://reqres.in/api/users/1')

.then( resp => resp.json() )
.then( usuario => {
    console.log(usuario);
});*/

//ACTIVIDAD 1
/*fetch('https://reqres.in/api/users/1')

.then( resp => {
    resp.json().then(usuario => {
        console.log(usuario.data);
    });
}); */

//ACTIVIDAD 2
/*fetch('https://reqres.in/api/users/1')

.then( resp => {
    resp.json().then(usuario => {
        console.log(usuario.data);
    });
    
    resp,json().then( usuario => {
        console.log(usuario.data);
    });

});*/

//ACTIVIDAD 3
fetch('https://reqres.in/api/users/1')

    .then( resp => {
        resp.json().then( usuario =>{
            console.log(usuario.data);
        });

        resp.json().then( usuario =>{
               console.log(usuario.data);
        });
    });