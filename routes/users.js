import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js';
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();


//router.post('./',  funcion)
//metodo http que: para crear es POST, para actualizar es PUT/PATCH y para eliminar es DELETE
// -> cada vez que realizo una peticion POST, se creará un recurso.
// -> cada vez que realizo una peticion GET, se leerán recursos.
// -> cada vez que realizo una peticion PUT/PATCH, se actualizará un recurso.
// -> cada vez que realizo una peticion DELETE, se eliminará un recurso.

//CREATE
router.post('/', create);

//READ
router.get('/', read);
router.get('/:id', readOne);           //el nombre del parametro puede ser cualquiera, pero tanto en el enrutador como en el controlador los debo llamar de la misma manera.

//UPDATE
router.put('/:u_id', update);

//DESTROY
router.delete('/:d_id', destroy);


export default router;