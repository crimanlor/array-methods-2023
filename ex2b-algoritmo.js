/**
 * Estamos haciendo consultas a una API que debería devolvernos números pero la han implementado mal y nos devuelve un array de string. Modifica el cuerpo de la función y utliza el método de array adecuado para TRANSFORMAR cada uno de los strings del array en un number
 * 
 * https://www.codewars.com/kata/5783d8f3202c0e486c001d23
 */

/**
 * 
 * @param {array} stringarray Array de strings
 * @returns {array} Devuelve un array de numbers 
 */
function toNumberArray(stringarray) {
    const newArray = stringarray.map(string => Number(string) )
    return newArray
}

// Caso de prueba 1: Números enteros en forma de strings
const testCase1 = ["1", "2", "3", "4", "5"];
const result1 = toNumberArray(testCase1);
console.log(result1); // [1, 2, 3, 4, 5]

// Caso de prueba 2: Números decimales en forma de strings
const testCase2 = ["1.1", "2.2", "3.3", "4.4", "5.5"];
const result2 = toNumberArray(testCase2);
console.log(result2); // [1.1, 2.2, 3.3, 4.4, 5.5]

// Caso de prueba 3: Mezcla de números enteros y decimales en forma de strings
const testCase3 = ["10", "20.5", "30", "40.75", "50"];
const result3 = toNumberArray(testCase3);
console.log(result3); // [10, 20.5, 30, 40.75, 50]