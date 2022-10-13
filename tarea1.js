/*fetch('https://swapi.dev/api/people/1/')

.then( resp => {
    resp.json().then(usuario => {
        console.log(usuario.data);
    });

});*/

fetch('https://swapi.dev/api/people/1/')
.then(resp => resp.json())
.then(respObj =>{
    console.log(respObj.name);
    console.log(respObj.gender);
});
