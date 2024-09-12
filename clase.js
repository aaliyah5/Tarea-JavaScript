let acceso;
let nombre = "Marta"
let apellido = "Lopez"
let altura = 68;

let datos = "El nombre es " + nombre +" " + apellido + " con la altura de " + altura;
console.log(datos)

let informacion = altura >= 60 ? nombre == "Marta" ? acceso = "acceso autorizado": acceso = "acceso negado":altura -=20
console.log(informacion)


//////

let num01 = 3;
let num02 = 25;
let num03 = 10;
let num04 = 66;
let multiplicacion = num01 * num04;
let division = num01 / num02;
let suma = num01 + num03;
let resta = num04 - num01;
let resultado = suma;

console.log("La suma de " + num01 + " y " + num03 + " es:", suma);
console.log("El resultado de la suma es:", resultado);



//////

const nombres = "MartaLopez";
const genero = "femenino";
const barrio = "Robledo";
const correo = "marta23@gmail.com"
const clave = "marta23";

let establecer;

console.log(`los nombres son ${nombres}, el genero es ${genero}, vive en ${barrio}, el gmail es ${correo}, la clave es${clave}`)

console.log(correo === "marta23@gmail.com" ? clave === "marta23" ? establecer = "Puedes cambiar tu contraseña": establecer = "Correo invalido")