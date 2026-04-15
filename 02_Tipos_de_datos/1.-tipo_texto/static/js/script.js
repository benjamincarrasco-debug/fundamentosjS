console.log("conexion con js correcta");
/* 
concentenacion de texto con el signo + podemos unir texto y variables 
*/
const nombre = "Juan";
const apellido = "Perez";
//unimos ambas constantes con un texto extra.
console.log("hola, mi nombre es " + nombre + " " + apellido);
/*
2. Ver el tipo de dato (typeof)
*/
console.log("la variable nombre es de tipo de dato: " + typeof nombre);
//template literal (forma moderna para concatenar)
console.log(`hola, mi nombre es ${nombre} ${apellido}`);

//mostrar el largo de un string(texto) - contar los caracteres.
// .length --> Para contar caracteres y espacios.
let palabra = "paralelepipedo";
console.log(`la palabra ${palabra} tiene ${palabra.length} caracteres`);
// crear una frase y contar sus caracteres.
let frase = "el perro de san roque no tiene rabo";
console.log(`la frase "${frase}" tiene ${frase.length} caracteres`);

//metodos comunes en js para formatear texto
//trasformar texto en mayusculas
let texto1 = "HoLA PrUpUcIn";
console.log(texto1.toUpperCase());
//trasformar texto en minusculas
console.log(texto1.toLowerCase());
//buscar un texto dentro de un scring
let texto2 = "el perro de san roque no tiene rabo";
console.log(texto2.includes("san roque"));//true
console.log(texto2.includes("gato"));//false
//convertir una variable a texto
let telefono = 676767676767
let telefono_Texto = String(telefono);
console.log(`mi numero de telefono es ${telefono_Texto} y es de tipo ${typeof telefono_Texto}`);