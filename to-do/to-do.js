const fs = require('fs');

let listadoToDo = [];

const cargarDB = () => {
    try {
        listadoToDo = require('../db/data.json');    
    } catch (error) {
        listadoToDo = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoToDo);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar en el archivo', err); 
    });
}

const crear = (descripcion) => {
    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB();

    return toDo;
}

/** En esta funcion podria mandar con el comando -c o -completado para listar solo aquellas 
 * tareas que estan en estado false o true
 */
const getListado = () => {
    cargarDB();
    return listadoToDo;
} 

const actualizar = (descripcion, completado = true) =>{
    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0){
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
} 

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== descripcion);    

    if (listadoToDo.length === nuevoListado.length){
        return false;
    }else{
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear, 
    getListado, 
    actualizar,
    borrar
}