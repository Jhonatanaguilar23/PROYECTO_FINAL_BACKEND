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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const generate_jwt_1 = __importDefault(require("../helpers/generate-jwt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body; //recibir email y contraseña
    try {
        // VERIFICAR EMAIL QUE EXISTA
        const login = yield user_1.default.findOne({
            where: {
                email
            }
        });
        if (!login) {
            return res.status(400).json({
                msg: 'El usuario no está registrado en la base de datos.'
            });
        }
        //VERIFICAR CONTRASEÑA QUE EXISTA
        const validPassword = bcryptjs_1.default.compareSync(password, login.dataValues.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Contraseña no son correctos'
            });
        }
        // VERIFICAR SI EL USUARIO ESTA ACTIVO
        if (!login.dataValues.state) {
            return res.status(400).json({
                msg: 'El Usuario no se encuentra activo'
            });
        }
        //GENERAR JWT
        const token = yield (0, generate_jwt_1.default)(login.dataValues.id);
        console.log(token);
        return res.status(200).json({
            token
        });
    }
    catch (error) {
    }
});
exports.default = login;
