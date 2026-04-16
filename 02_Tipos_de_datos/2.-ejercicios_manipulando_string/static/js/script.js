console.log("conexion con js correcta");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre = "Camila";
let edad = 25;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años. El tipo de dato de edad es: ${typeof edad}`);

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipú";
let region = "Metropolitana";
console.log(`Vivo en la comuna de ${comuna.toUpperCase()} y en la región ${region.toLowerCase()}.`);
// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`La palabra "${lenguaje}" tiene ${lenguaje.length} caracteres, en mayúsculas se escribe "${lenguaje.toUpperCase()}" y su tipo de dato es: ${typeof lenguaje}.`);
// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`El mensaje tiene ${mensaje.length} caracteres. Contiene la palabra "JavaScript": ${mensaje.includes("JavaScript")}. El mensaje en minúsculas es: "${mensaje.toLowerCase()}".`);
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal";
console.log(`las compras tiene ${compras.length} caracteres. contiene la palabra "aceite": ${compras.includes("aceite")}. El mensaje en mayusculas es: "${compras.toUpperCase()}".`);
// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = numeroCasa.toString();
console.log(`El número convertido a texto es: "${numeroCasaTexto}". El tipo de dato es: ${typeof numeroCasaTexto}. La cantidad de caracteres es: ${numeroCasaTexto.length}.`);
// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let Nombre = "diego"
let apellido = "Rojas"
console.log(`Mi Nombre completo es ${Nombre} ${apellido}. El Nombre completo tiene ${Nombre.length + apellido.length + 1} caracteres. El Nombre completo en mayúsculas es: "${(Nombre + " " + apellido).toUpperCase()}".`);
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "hoy aprederemos, sobre string"
console.log(`la frase contiene la palabra "strings": ${frase.includes("strings")}. La frase en mayúsculas es: "${frase.toUpperCase()}". La cantidad de caracteres es: ${frase.length}.`);
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto =  "Programar es divertido"
console.log(`El texto original es: "${texto}". El texto en minúsculas es: "${texto.toLowerCase()}". El texto en mayúsculas es: "${texto.toUpperCase()}". La cantidad de caracteres es: ${texto.length}.`);
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C"
let anio ="2026"
let anio_texto = "anio_texto.toString()";
console.log(`Estoy en el curso ${curso} del año ${anio}. El año convertido a texto es: "${anio_texto}". El tipo de dato del año convertido es: ${typeof anio_texto}. El mensaje completo en mayúsculas es: "ESTOY EN EL CURSO ${curso} DEL AÑO ${anio}".`)