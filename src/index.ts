import mostrarEstudiante  from "./mostrarEstudiante";
import { Addresses , Estudiante } from "./tipos";



//definir variables del tipo dado

const e1: Estudiante={
    nombre: "Yimmer",
    apellido : "Guzman",
    addresses :[
        {
        street : "Siempre Viva",
        numero : 32,
        city : "Bogota"

            },
            {
                street : "Siempre Viva",
                numero: 23,
                city : "Bogota"
            }
    ]
        
        
}

const e2: Estudiante={
    nombre: "Arley",
    apellido : "Ruiz",
    addresses :[
        {
        street : "Vista Hermosa ",
        numero : 64,
        city : "Bogota"

            },
            {
                street : "Lucero Alto",
                numero: 50,
                city : "Bogota"
            },
            {
                street : "San Francisco",
                numero: 45,
                city : "Bogota"
            }

    ]
        
        
}


//Crear arreglo para almacenar estudiantes:
let arregloEstudiante :(number | string | Estudiante)[] = []
//agregar primeros elementos
arregloEstudiante.push(2);
arregloEstudiante.push("Carlos")
arregloEstudiante.push("Jorge")
arregloEstudiante.push(3);
const addEstudiante = (e: Estudiante)=>{
arregloEstudiante.push(e)
}
console.log(addEstudiante)


const addEstudiantePrincipio = (e: Estudiante)=>{
    arregloEstudiante.unshift(e)
    }
addEstudiante(e1)
addEstudiante(e2)

//mostrando solo los Estudiante
arregloEstudiante.forEach((elemento)=>{
    /*condicional para determinar si en elemnto existe un objeto de tipo estudiante*/
    if (typeof elemento == 'object' && elemento !== null) {
        if ('nombre' in elemento && 'apellido' in elemento)
        mostrarEstudiante(elemento);
    }
})
addEstudiante(e1)
addEstudiantePrincipio(e2)
addEstudiante

//Crear un metodo para agregar u Estudiante 
/* const addEstudiante=(e : Estudiante)=>{
    //instrucciones para agregar el estudiante al arreglo
    arregloEstudiante.push(e)
} */

//metodo para añadir estudiante al  del arreglo 


//METODO PARA ENCONTRAR UN ESTUDIANTE POR NOMBRE Y ACTUALIZAR SU APELLIDO   
/*const actualizarApellidoPorNombre=(
    nombre : string,
    nuevoapellido:string
)=>{
    const estudiante = arregloEstudiante.find(e => e.nombre === nombre);
    if (estudiante){
        estudiante.apellido = nuevoapellido;
        console.log(`apellido de ${nombre} se actualiza a ${nuevoapellido}`)
    }
    else
    console.log(`Estudiante con nombre ${nombre} no encontrado`)
    }

//metodo para encontrar los estudiantes que vivan en Bogota y actualizar su edad a 18
const actualizarEdadEnBogota = (nuevaEdad: number) =>{
    arregloEstudiante.forEach(estudiante => {
        if (estudiante.addresses && estudiante.addresses.some(addresses => addresses.city.trim() === "Bogota" )){
            estudiante.edad = nuevaEdad;
        }
    })
}

const borrarPorNombreYApellido = (nombre: string , apellido: string)=>{
    const longitudOriginal = arregloEstudiante.length;
    arregloEstudiante =arregloEstudiante.filter( e => e.nombre !== nombre || e.apellido);


}



//metodo para borrar los estudiantes que tenga menos de 18 años y vivan en Bogota
//const borrareMenoresEnBogota(

//){

//}

//borrareMenoresEnBogota()
*/

//Invocar el metodo para agregar el studiante e1 al arreglo
/* 
 */
/* borrarPorNombreYApellido("Yimmer", "Ruiz")
actualizarApellidoPorNombre("Yimmer", "Ruiz")
actualizarEdadEnBogota(18);
console.log(arregloEstudiante) */


//console.log(arregloEstudiante)

addEstudiante(e1)
