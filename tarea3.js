 

fetch('https://swapi.dev/api/people/1/')
.then(resp => resp.json())
.then(respObj =>{
    console.log(respObj.name);
    console.log(respObj.gender);
});

let respObj={
    
};

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify( respObj),
    headers: {
        'Content-Type' : 'aplication/json' 
    }

})
.then (resp => resp.json())
.then(respObj => {
     console.log(respObj.id);
     console.log(respObj.createdAt);
     })
.catch(error=>{
console.log ('Error en la petición');
console.log(error);
});