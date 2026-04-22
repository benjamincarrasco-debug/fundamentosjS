console.log("conexion exitosa con js");
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en alert.
function edadProyectada() {
    let edad = 17;
    alert(`mi edad es: ${edad} \nEn 5 años tendre ${edad + 5} \nantes tenia ${edad - 10}`)
}
// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento() {
    let precio = 25000
    alert(`El precio es de: ${precio} \nEl precio con descuento es de: ${precio - (precio * 0.20)}`)
}
// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas() {
    let nota1 = 1.0
    let nota2 = 5.0
    let nota3 = 7.0
    alert(`Las notas que sacor los alumnos fueron las siguientes: ${nota1}, ${nota2} y ${nota3} El promedio es de: ${nota1 + nota2 + nota3}\ 3
    \nredodiando seria: ${Math.round(nota1 + nota2 + nota3) / 3}`)
}
// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura() {
    let temperatura = 12
    alert(`La temperatura es de: ${temperatura}
    \nLa temperatura mas 3 seria: ${temperatura + 3}
    \nY la temperatura menos 5 seria: ${temperatura - 5}`)
}
// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo
function calcularSueldo() {
    let sueldo = 8000
    let horas = 45
    alert(`Su sueldo es de  8000 por hora es de: ${sueldo + horas}
    \nEl sueldo que tendria despues de 5 horas entre seria de: ${(horas + 5) * sueldo}`)
}
// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola
function DivisionResta() {
    let num6 = 5
    let num5 = 8
    alert(`El resultado de la divicion ${num6 / num5}
        \ny resto es de: ${num6 % num5}
        \nEl resultado se dio gracias a que se dividio:6 y 4 y luego se saco el resto`)
}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10
function comparacionNumeros() {
    let numerin = 10
    let numero = 7
    alert(`El numerin es mayor a numero: ${numerin > numero}
    \n El numerin es igual a 10: ${numerin === 10}`)
}
// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function NotaciónCientifica() {
    let poblacion = 1e6
    alert(`Si dividimos esta poblacion: ${poblacion}
        \nLo divimos en 4: ${poblacion / 4}
        `)
}
// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final
function PotenciaCalculo() {
    let numerote = 3
    let mumero = 4
    alert(`Si elevamos 3 y 4 seria: ${3 ** 4}
    \nDespues a este resultado la multiplica por 2 seria: ${3 ** 4 * 2}
    \nPor ultimo a le retamos a esto seria: ${3 ** 4 * 2 - 10}`)
}
// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function dadoAleatorio() {
let dado = Math.floor(Math.random()*6) + 1;
alert(`Tirar dado: ${dado}
    \nSi el numero es mayor a 4 o igual: ${dado >= 4}`)
}