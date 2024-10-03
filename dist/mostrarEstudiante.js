"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante = (estudiante) => {
    //Informacion del Estudiante
    var _a;
    console.log(`Nombre : ${estudiante.nombre}`);
    console.log(`Apellido : ${estudiante.apellido}`);
    console.log(`Edad : ${estudiante.edad || `NO DEFINIDO`}`);
    console.log("DIRECCIONES: ");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach((direccion) => {
        console.log(`Calle : ${direccion.street}`);
        console.log(`Numero : ${direccion.numero}`);
        console.log(`Ciudad : ${direccion.city}`);
        console.log("---------------");
    });
};
exports.default = mostrarEstudiante;
