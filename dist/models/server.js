"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importa el express, se declara la Application
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//importamos el archivo connection de la base de datos
const connection_1 = __importDefault(require("../db/connection"));
//importamos el router del archivo users.ts routes y le podemos cambiar el nombre ya que se exporto con default
const users_1 = __importDefault(require("../routes/users"));
const auth_1 = __importDefault(require("../routes/auth"));
const products_1 = __importDefault(require("../routes/products"));
const customers_1 = __importDefault(require("../routes/customers"));
const quotes_1 = __importDefault(require("../routes/quotes"));
//declarar variables
class Server {
    constructor() {
        this.apiPaths = {
            auth: '/api/auth',
            users: '/api/users',
            products: '/api/products',
            customers: '/api/customers',
            quotes: '/api/quotes'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.dbconnection();
        this.middlewares();
        this.routes();
    }
    dbconnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate; //autentica la base de datos
                console.log('database online'); //se ejecuta si la bd esta en linea
            }
            catch (error) { //captura los errores que se presenten en la bd
                console.log(error);
            }
        });
    }
    ;
    middlewares() {
        this.app.use(express_1.default.json()); //lectura y parcheo del body
        this.app.use((0, cors_1.default)()); //permite peticiones desde cualquier dominio o servidor
        //  this.app.use(cors({             //permite peticiones desde un dominio o servidor especifico
        //      origin: 'http://localhost:5173/'
        //  }));           
    }
    ;
    //funcion para las rutas
    routes() {
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.users, users_1.default);
        this.app.use(this.apiPaths.products, products_1.default);
        this.app.use(this.apiPaths.customers, customers_1.default);
        this.app.use(this.apiPaths.quotes, quotes_1.default);
    }
    ;
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Se esta ejecutando en el puerto: ${this.port}`);
        });
    }
    ;
}
exports.default = Server;
