//1. Contraseñas válidas
//Escribir una función llamada contrasenaValidaque reciba una cadena y retorne truesi la cadena es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

function contrasenaValida(contraseña){
    if(contraseña ==="2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9" ){
        return true
    } else {
        return false
    }
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false
console.log("//////////////////////////////////////////////////////////")
//2. Calcular impuestos
//Escribir una función llamada calcularImpuestosque reciba dos argumentos numéricos: edade ingresos. Si edades igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos* 40%. De lo contrario regresará 0.

function calcularImpuestos(edad, ingresos){
    if (edad >= 18 && ingresos >= 1000){
        return ingresos= ingresos*40/100
    } else {
        return 0
    }
}

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0
console.log("//////////////////////////////////////////////////////////")

/*3. IMC (índice de masa corporal)
El índice de masa corporal (IMC), o IMC por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El IMC se calcula con la siguiente fórmula:peso / altura^2

Escribir una función llamada bmique reciba dos argumentos: peso y altura, y devolver una cuerda con las siguientes posibilidades:

"Bajo de peso" si el IMC < 18,5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */

function bmi(peso, altura){
    let imc=peso/(altura**2)
    if(imc < 18.5){
        return "bajo de peso"
    } else if(imc >= 18.5 && imc < 25){
        return "Normal"
    } else if(imc >= 25 && imc < 30){
        return "Sobrepeso"
    } else {
        return "Obeso"
    }
}

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
console.log("//////////////////////////////////////////////////////////")

//Imprimir un arreglo
//Escribir una función llamada imprimirArregloque reciba un arreglo e imprima cada elemento en una línea a parte:

function imprimirArreglo(array){

    for(i=0 ; i< array.length; i++ ){
        console.log(array[i])
    }
}

// código de prueba
imprimirArreglo[1, "Hola", 2, "Mundo"]
console.log("//////////////////////////////////////////////////////////")
// 1
// Hola
// 2
// Mundo 

/*5. Número de Me gusta
//Escribe una función llamada likesque recibe un número y retorna una cadena utilizando el formato de K para millas y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte a 34K
7'456,345 se convierten en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string. */

function likes(x){
    let y = ""
    if(x<1000){
        return x
    } else if (x>999  && x < 1000000){
        return Math.floor(x/1000) + "K"    
    } else {
        return Math.floor(x/1000000) + "M"
    }
}

// código de prueba
console.log(likes(1983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M" 
console.log("//////////////////////////////////////////////////////////")

//6. Efervescencia
//Escribir una función llamada fizzBuzzque reciba un número y regrese una cadena de acuerdo a lo siguiente:


/*
"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores deberá retornar el mismo número.*/

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num;
    }
}

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
console.log("//////////////////////////////////////////////////////////")

/*7. Contar rango de números
Escribir una función llamada contarRangoque reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utilice un ciclo en su solución. Puedes asumir que el primer número va a ser menor que el segundo.*/

function contarRango(inicio, fin) {
    let contador = 0;
    for (let i = inicio + 1; i < fin; i++) {
        contador++;
    }
    return contador;
}

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
console.log("//////////////////////////////////////////////////////////")

/*8. Sumar rango de números
Escribir una función llamada sumarRangoque reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.*/

function sumarRango(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
}

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
console.log("//////////////////////////////////////////////////////////")

function numAsteriscos(matriz) {
   
    let contador = 0

    // Iterar sobre cada fila de la matriz
    for (let fila of matriz) {
        // Iterar sobre cada elemento de la fila
        for (let elemento of fila) {
           
            if (elemento === '*') {
                contador++;
            }
        }
    }

   
    return contador;
}

// Código de prueba
console.log(numAsteriscos([
  ['', '', '*'],
  ['', '*', ''],
  ['', '', '*'],
  ['', '*', ''],
  ['', '*', ''],
  ['', '*', ''],
  ['', '*', ''],
  ['', '*', ''],
  ['', '*', '']
])); // 5
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada terminanConSque reciba un arreglo de cuerdas y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).

function terminanConS(array){
    let nuevoArray=[]

    for(i=0;i<array.length;i++){
        let x = array[i].slice(-1)
        if(x==="s"){
            nuevoArray.push(array[i])
        }
    }
    console.log(nuevoArray)
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // [] 
console.log("//////////////////////////////////////////////////////////")


function numeroDeAes(cadena) {
    
    cadena = cadena.toLowerCase()
  
    return cadena.split('a').length - 1
}

// Código de prueba
console.log(numeroDeAes("abra   cadabra")); // 5
console.log(numeroDeAes("etA DEFSA  AEFADSinol")); // 0
console.log(numeroDeAes("Aa")); // 0
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada numeroDeCaracteresque reciba una cadena y un carácter (un string de un caracter). La función debe devolver el número de veces que aparece el carácter en la cadena.

function numeroDeCaracteres(palabra, letra){
    palabra=palabra.toLowerCase()
    return palabra.split(letra).length-1
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada multiplicarArregloque reciba un arreglo de números y retorne la multiplicación de todos los elementos.

function multiplicarArreglo(array){
    let resultado=1
    for(i=0;i<array.length;i++){
        resultado=resultado*array[i]
    }
    return resultado
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada removerCerosque reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

function removerCeros(array){
    let nuevoArray=[]
    for(i=0;i<array.length;i++){
        if(array[i]!==0){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada paresque reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.

function pares(arr) {
    let resultado = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            resultado.push(arr[i])
        }
    }

    return resultado
}


// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []   
console.log("//////////////////////////////////////////////////////////") 

//Escribir una función llamada capitalizarque reciba una cadena y mayúscula la primera letra:

function capitalizar(cadena) {
    
    if (cadena.length === 0) {
        return cadena;
    }

    
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada empiezanConAque reciba un arreglo de cuerdas y retorne un nuevo arreglo con todas las palabras que comiencen por "a" (mayúscula o minúscula).

function empiezanConA(array){
    let letra=""
    let nuevoArray=[]
    for(i=0; i<array.length; i++){
        letra=array[i].charAt(0)
        console.log(letra)
        if(letra === "a" || letra === "A"){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada posicionesque reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.

function posiciones(array){
   
    let nuevoArray=[]

    for(i=0; i<array.length; i++){
        
        if(array[i] % 2 === 0){
            nuevoArray.push(i)
        }
    }
    return nuevoArray
    
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6, 11,13,14])) // [1, 3, 5]
console.log(posiciones([])) // []
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada duplicarque reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

function duplicar(array){
    let nuevoArray=[]

    for(i=0; i<array.length; i++){
        
       nuevoArray.push(array[i]*2)
    }
    return nuevoArray
}

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []
console.log("//////////////////////////////////////////////////////////")

//Escribir una función llamada imprimirMatrizque reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.

// escribe tu función acá

function imprimirMatriz(matriz) {
   
    for (i = 0; i < matriz.length; i++) {
        
        for (j = 0; j < matriz[i].length; j++) {
           
            console.log(matriz[i][j]);
        }
    }
}

console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
console.log("//////////////////////////////////////////////////////////")