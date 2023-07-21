"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar metodo de express
const express_1 = require("express");
//importar variable del codigo de consultar usuarios
const users_1 = require("../controllers/users");
const users_2 = require("../validators/users");
const router = (0, express_1.Router)(); //creo variable y asigno Router de express
router.get('/consultUsers', users_1.consultUsers); //creo ruta 'consultar usuarios'
router.get('/consultUsers/:id', users_1.consultUserById); //creo ruta 'consultar usuario por id'
router.get('/consultUserByNames/:names', users_1.consultUserByNames); //ruta "consulta por nombre"
router.post('/saveUsers', users_2.validateCreateUser, users_1.saveUsers); //creo ruta 'registrar usuarios'
router.put('/updateUser', users_1.updateUser); //creo ruta 'actualizar usuarios'
router.delete('/deleteUser/:id', users_1.deleteUser); //ELIMINAR USUARIO POR BODY
//router.delete('/deleteUser/:id', deleteUser);                     //ELIMINAR USUARIO POR PARAMETRO
//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not found'
    });
});
exports.default = router; //exportar ruta
