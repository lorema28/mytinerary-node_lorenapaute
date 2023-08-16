// IMPORTS
import 'dotenv/config.js'                     //importo UNICAMENTE la configuración de las variables de entorno
import __dirname from './utils.js';           //importo la configuracion de la ubicacion del servidor (antes, con commonjs, venia pre-configurada)
//var createError = require('http-errors');
import createError from 'http-errors';   //este sirve para crear errores
//var express = require('express');
import express from 'express';         //nos da métodos y propiedades para levantar servidores
//var path = require('path');  
import path from 'path'          //este módulo sirve para conocer la ubicación de este servidor

       
//var cookieParser = require('cookie-parser');     //manejo de cookies
//var logger = require('morgan');
import logger from 'morgan'      //para registrar cada una de las peticiones

//var indexRouter = require('./routes/index');      //solo se configuran las rutas del enrutador del back principal
import indexRouter from './routes/index.js'   //este enrutador va a llamar a TODOS los otros recuersos (cities,itineraries,users)
//var usersRouter = require('./routes/users');  

let app = express();                          //ejecutando el módulo de express: CREO UNA APP DE BACKEND (SERVIDOR)

// VIEW ENGINE SETUP
//SET es el método necesario para SETear (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES (funciones)
//USE es el método necesario para obligar a mi aplicación a que use la función CADA VEZ que se realiza una SOLICITUD/PETICION
app.use(logger('dev'));                                   //obligo al servidor a registrar una petición con el módulo de logger/morgan
app.use(express.json());                                  //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));         //obligo al servidor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //obligo al servidor a acceder a los archivos estáticos de la capreta public


// ROUTER
app.use('/api', indexRouter);                                //obligo al servidor a que use las rutas del enrutador principal con "/api"

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app
