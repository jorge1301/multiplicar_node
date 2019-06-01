let opciones ={
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

let argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar',opciones)
    .help()
    .argv;


module.exports = {
    argv
}