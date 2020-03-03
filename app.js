//

//const fs = require('express').arg;
//const fs = require('../fs');

const argv = require('./config/yargs.js').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarTabla } = require('./multiplicar/multiplicar.js');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', `${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//consola . log ( colores . verde ( ' Hola% s ' ) ,  nombre ) ;

//let argv2 = process.argv;
//console.log('limite', argv.limite);
/*let parametro = argv[2];
let base = parametro.split('=')[1];*/