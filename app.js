const argv = require('./config/yargs.js').argv;
const toDo = require('./to-do/to-do.js');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = toDo.getListado();
        console.log('############### TO DO ###################'.green);
            
        for(let tarea of listado){
            console.log(`Descripcion: ${tarea.descripcion}`.yellow);
            console.log(`Estado: ${tarea.completado}`.yellow);
            console.log('-----------------------------------------'.yellow);
        }

        console.log('#########################################'.green);

        break;
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;    
    default:
        console.log('No se reconoce el comando de entrada');    
}