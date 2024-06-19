/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

numbers.forEach(number => console.log("Cada número del array: " + number))

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */
const maxNumberAboveTen = numbers.find(number => number > 10)
console.log("Primer número mayor que 10: " + maxNumberAboveTen)

/**
 * Utliza el método some para saber si existe un número mayor de 20
 */
const IsbiggerThan20 = numbers.some(number => number > 20)
console.log(IsbiggerThan20)


/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */
const arrayIsOdd = numbers.every(number => number % 2 !== 0)
console.log(arrayIsOdd)

/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */
const newArray = numbers.filter(number => number > 3 && number < 9)
console.log(newArray)


/**
 * Utiliza el método map para obtener otro array donde, para cada posición, ontengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */
const newMapArray = numbers.map(number => {
    if (number < 0){
        return -1
    } else {
        return  1
    }
})
console.log(newMapArray)

// Otra forma de hacerlo
// numbers.map(number => Math.sign(number))