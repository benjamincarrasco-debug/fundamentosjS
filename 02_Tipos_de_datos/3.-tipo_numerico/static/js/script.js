console.log("conexion exitosa con js");
// tipos de datos numericos
//1.- declaracion de numeros (creacio  de variables numericas)
let edad = 3;
let temperatura = 5;
let precio = 19990;
let pi = 3.14;
let descuento = 0.25

//operaciones basicas
let suma = 10 + 5 //15
let resta = 10 - 5 //5
let multiplicacion = 10 * 5 //50
let division = 10 / 5 //2
let modulo = 10 % 3 //1
let potencia = 2 ** 3 //8

console.log(`El resultado de 2 elevado a 3 en potencia es: ${2**3}`);

//3.- Incremento y descuento
let numero = 10;
numero++; //11
numero--; //9

//4.- Numeros con decimales (suma(++), resta(--))
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5.-Numeros grandes y notacion cientifica
let poblacion = 1e6; //100000
console.log("numero grande le6:" + poblacion)
let numeroPequeno = 5e-3; //0.005
console.log("numero pequeño 5e-3:" + numeroPequeno);

//6.- operaciones conbinadas
//calculo de precios
let precioProducto = 10000;
let iva = 0.19;
let precioFinal = precioProducto + (precioProducto * iva);//11900
console.log(`El valor final del producto es: ${precioFinal}`);
//calculo de valor de hora trabajada
let horas = 40;
let valor = 7000;
let sueldo = horas * valor; 
console.log(`El sueldo base es: ${sueldo}`);

//7.- Redondeo de numeros
console.log("redondiando 4.6: " + Math.round(4.6));//5
console.log("redondiando 4.3: " + Math.floor(4.6));//4
