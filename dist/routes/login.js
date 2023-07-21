"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../login");
const router = (0, express_1.Router)(); //creo variable y asigno Router de express
router.post('/login', login_1.login);
exports.default = router; //exportar ruta
