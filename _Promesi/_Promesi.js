/*-------- BACK END -------*/
const BackendFuntion = new Promise ((resolve, reject) => {
    console.log("conectando con el..⌛");

    let error = false;

    setTimeout(()=> {
        if (error)
reject("usuario no encontrado");

else
resolve([1,2,3,4]);
    },2000);
    
});

/*-------- FRONT END ----------*/



BackendFuntion.then((respuesta) => {
    console.log("resolvemos.. ", resolvemos);
}).catch((error)=>{
    console.log("rechazamos",error);});

console.log("llegamos al final🛑");
