let usuario={
    nombre: 'Fernando',
    edad:32
};

fetch('https://regres.in/api/users',{
    method: 'POST',
    body: JSON.stringify( usuario),
    headers: {
        'Content-Type' : 'aplication/json' 
    }

})
.then (resp => resp.json())
.then(console.log)

.catch(error=>{
console.log ('Error en la petición');
console.log(error);
});

