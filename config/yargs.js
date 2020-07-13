const opts = {descripcion: {demand: true, alias: 'd', desc: 'Descripción de la tarea por hacer'},
              completado: {default: true, alias: 'c', desc: 'Marca como completado o pendiente la tarea'}};

const argv = require('yargs')
                .command('crear','Crear un elemento To do', opts)
                .command('actualizar','Actualizar el estado completo de una tarea To do', opts)
                .command('borrar','Borra un elemento To do', opts)
                .help()
                .argv;


module.exports = {
    argv
}                  