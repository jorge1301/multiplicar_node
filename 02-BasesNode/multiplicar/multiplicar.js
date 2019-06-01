let fs = require('fs');
let colors = require('colors');

let listar = (base,limite=10)=>{
    console.log(`Tabla de multiplicar del numero ${base}`.yellow);
    for(let i=0; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base,limite=10) => {
    return new Promise((resolve,reject) => {
    let data = '';
        if(!Number(base,limite)){
            reject(`No es un numero`)
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if(err){
                reject(`Archivo no creado`)
            }
            else {
                resolve(` tabla-${base}.txt`)
            }
        })
    })
   
    
    
}


module.exports = {
    crearArchivo,
    listar
};
