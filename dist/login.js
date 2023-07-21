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
exports.login = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./models/user"));
const app = (0, express_1.default)();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //verificar las credenciales
    const login = yield user_1.default.findAll({
        where: {
            email,
            password
        }
    });
});
exports.login = login;
// // Ruta de inicio de sesión
// app.post('/login', (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   // Verificar las credenciales
//   const login = users.find((user) => user.username === username && user.password === password);
//   if (login) {
//     res.status(200).json({ message: 'Inicio de sesión exitoso' });
//   } else {
//     res.status(401).json({ message: 'Credenciales incorrectas' });
//   }
// });
