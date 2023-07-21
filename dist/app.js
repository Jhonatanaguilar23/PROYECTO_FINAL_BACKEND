"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv")); //importar paquete de variable de entorno
const server_1 = __importDefault(require("./models/server")); //importar la clase del server (servidor)
dotenv_1.default.config(); //propiedades de la variable de entorno
//se crea const para instanciar el Server (las clases se instancian)
const server = new server_1.default();
server.listen();
