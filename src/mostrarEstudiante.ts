import { Addresses , Estudiante } from "./tipos";


const mostrarEstudiante =(estudiante : Estudiante)=>{
    //Informacion del Estudiante

    console.log(`Nombre : ${estudiante .nombre}`)
    console.log(`Apellido : ${estudiante .apellido}`)
    console.log(`Edad : ${estudiante .edad || `NO DEFINIDO`}`)
    console.log("DIRECCIONES: ")
    estudiante.addresses?.forEach((direccion:Addresses)=>{
        console.log(`Calle : ${direccion.street}`)
        console.log(`Numero : ${direccion.numero}`)
        console.log(`Ciudad : ${direccion.city}`)
        console.log("---------------")
    })
    }

export default mostrarEstudiante;