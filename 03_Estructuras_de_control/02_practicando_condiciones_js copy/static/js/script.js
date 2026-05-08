console.log("conexion exitosa con js")

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.5

    if (nota >= 6.0) {
        alert(`El estudiante juan tiene nota ${nota} y su resultado es: ¡excelente rendimiento!`)
    } else if (nota >= 4.0) {
        alert(`El estudiante juan tiene nota ${nota} y su resultado es: necesitas mejorar`)
    } else
        alert(`El estudiante tiene ${nota} y su resultado es: reprovado`)

}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nam = "DANIEL PÉREZ"


}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {

}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo";
    if (frase.length >= 20) {
        alert(`tiene ${frase.length} y es una frase larga`);
    } else if (frase.length >= 11) {
        alert(`tine ${frase.length} y es una frase mediana`);

    } else {
        alert(`tiene ${frase.langth} y es una frase corta`)
    }

}

// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado"
    let precio = 50000
    let descuento = 0.1
    alert(`El producto ${producto.toUpperCase()}tiene un precio final de $${precio - (precio * descuento)}`)

}



/*Convertir el nombre del cliente a mayúsculas
Determinar el tipo de cliente según el precio:
Mayor o igual a 100.000 → Cliente Premium (20% descuento)
Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
Menor a 50.000 → Cliente Normal (sin descuento)*/
function ejercicio17() {
    let nombreCliente = "maria lopez"
    let precioCompra = 120000
    if (precioCompra >= 100000) {
        alert(`El cliente ${nombreCliente.toUpperCase()} es un cliente Premium y tiene un precio final de $${precioCompra - (precioCompra * 0.2)}`)
    } else if (precioCompra >= 50000) {
        alert(`El cliente ${nombreCliente.toUpperCase()} es un cliente Frecuente y tiene un precio final de $${precioCompra - (precioCompra * 0.1)}`)
    } else {
        alert(`El cliente ${nombreCliente.toUpperCase()} es un cliente Normal y tiene un precio final de $${precioCompra}`)
    }
}
/*Ejercicio 19: Clasificación de desempeño con más niveles
Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

Convertir el nombre a mayúsculas
Clasificar el rendimiento según:
≥ 6.5 → Sobresaliente
≥ 6.0 → Muy buen rendimiento
≥ 5.0 → Buen rendimiento
≥ 4.0 → Suficiente
< 4.0 → Insuficiente*/
