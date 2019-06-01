let {crearArchivo,listar} = require('./multiplicar/multiplicar');
let {argv} = require('./config/yargs');
let colors = require('colors');

let comando = argv._[0];
switch(comando){
    case 'listar':
        listar(argv.base,argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(mensaje => console.log(`Archivo creado: ${mensaje}`.rainbow))
            .catch(err => {
                console.log(err)
            })
            break;

    default:
        console.log('Comando no renocido');
}


//console.log(argv.base)


