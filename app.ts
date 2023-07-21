import dotenv from 'dotenv';            //importar paquete de variable de entorno
import Server from './models/server'    //importar la clase del server (servidor)
dotenv.config();                        //propiedades de la variable de entorno


//se crea const para instanciar el Server (las clases se instancian)
const server = new Server();      
server.listen();
