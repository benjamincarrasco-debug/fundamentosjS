console.log("conexion ecitosa JS..")

/*
=====================================
¿que es una condicion en JS?
=====================================
Una condicion nos permite tomar decisiones en el códigos. Separando dos caminos el si(if)y el no(else).

Estructura basica:( sintaxis  --> Reglas del Lenguaje de programacion)

if (condicion) {
//código que se ejecuta si la condicion es verdadera.
} else {
    //código que se ejecuta si la cindicion es falsa.
}
*/
//ejemplo 1: (numerico) ---if
let edad = 18

if (edad <= 18) { //Condicion si
    console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if (temperatura > 20) {
    console.log("Hace calor");
} else {//Condicion no
    console.log("Hace frio")
}

//Ejemplo 3: If - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;
if(nota >=6.0){ //Primera condicion
    console.log("excelente!");
}else if(nota >= 4.0){//Segunda condicion
    console.log("Aprobado, puedes mejorar!")
}else{//valor si no cumple anteriores
    console.log("reprobado, estudia mas")
}

//Ejemplo 4: Condicion con STRING
let nombre = "tungtung"

//Comparacion exacta (===)
if (nombre === "tungtung"){
    console.log("Hola " + nombre)
} else {
    console.log("Tu no eres tungtung")
}

/*
OPERADORES DE COMPARACION

>mayor que
<menor que
>=mayor o igual
<=menor o igual
=== igualdad
!== distinto estricto
== igualdad
!= distinto
*/
//Ejemplo de distinto
let num = 10;
let num2 = 5
if(num !== num2){
    console.log(`El numero: ${num} es distinto que ${num2}`)

    }else{
        console.log("Son iguales")
    }