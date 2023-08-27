import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

//router.metodo('/',funcion)
//metodo http que: para crear es POST, para leer es GET, para actualizar es PUT/PATCH y para eliminar es DELETE
//funcion que se va a ejecutar UNA UNICA VEZ cada vez que se llame al endpoint de manera que
//cada vez que realizo una petición POST, se creará un recurso
//cada vez que realizo una petición GET, se leeran recursos
//cada vez que realizo una peticion PUT/PATCH, se actualizaran un recurso
//cada vez que realizo una peticion DELETE, se eleiminara un recurso

//CREATE
router.post('/signup', create)

//READ
router.get('/', read)
router.get('/:user_id', readOne)
//el nombre del parametro puede ser cualquiera
//pero tanto aca en el enrutador, como en el controlador, los debo llamar, de la misma forma
//EJEMPLO: aca y en controller id
//EJEMPLO: aca y en controller user_id
//EJEMPLO: aca y en controller userId
//EJEMPLO: aca y en controller ignaId

//UPDATE
router.put('/:u_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router