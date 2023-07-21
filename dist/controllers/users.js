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
exports.deleteUser = exports.updateUser = exports.saveUsers = exports.consultUserByNames = exports.consultUserById = exports.consultUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const roles_1 = __importDefault(require("../models/roles"));
const user_1 = __importDefault(require("../models/user"));
//CONSULTAR USUARIOS
const consultUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll({
        attributes: ['id', 'names', 'email', 'password', 'state', 'idRol', 'createdByRol'],
        include: [{
                model: roles_1.default,
                attributes: ['description'] //mostrar solo la descripcion del rol
            }],
        where: {
            state: 1 //siempre y cuando esten activos
        }
    });
    res.status(200).json({
        msg: 'Consultar Usuarios',
        users
    });
});
exports.consultUsers = consultUsers;
//CONSULTAR USUARIOS POR ID
const consultUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.status(200).json({
            user
        });
    }
    else {
        res.status(404).json({
            msg: 'El usuario no existe'
        });
    }
    ;
});
exports.consultUserById = consultUserById;
//CONSULTAR USUARIO POR NOMBRE
const consultUserByNames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { names } = req.params;
    const user = yield user_1.default.findAll({
        where: {
            names
        }
    });
    res.status(200).json({
        user
    });
});
exports.consultUserByNames = consultUserByNames;
//CREAR USUARIOS
const saveUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { names, email, password, state, idRol, createdByRol } = req.body;
    //Encriptar la contraseña
    const salt = bcryptjs_1.default.genSaltSync();
    password = bcryptjs_1.default.hashSync(password, salt);
    const user = yield user_1.default.create({ names, email, password, state, idRol, createdByRol });
    res.status(200).json({
        msg: `Se ha registrado el Usuario con el ID: ${user.dataValues.id}`
    });
});
exports.saveUsers = saveUsers;
//ACTUALIZAR USUARIOS
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, names, email, password, state, idRol } = req.body;
    const user = yield user_1.default.update({ names, email, password, state, idRol }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido actualizado`
    });
});
exports.updateUser = updateUser;
//ELIMINAR USUARIOS POR BODY
/*export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.body;

    const user = await User.destroy({
        where: {
            id
        }
    });

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};*/
//ELIMINAR USUARIOS POR PARAMETRO
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteUser = deleteUser;
//ELIMINAR USUARIO CAMBIANDO SU ESTADO A INACTIVO
/*export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const state = 0;
    await User.update({ state }, {
        where: {
            id
        }
    });

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};*/ 
